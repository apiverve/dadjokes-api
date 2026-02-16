/// Response models for the Dad Jokes API.

/// API Response wrapper.
class DadjokesResponse {
  final String status;
  final dynamic error;
  final DadjokesData? data;

  DadjokesResponse({
    required this.status,
    this.error,
    this.data,
  });

  factory DadjokesResponse.fromJson(Map<String, dynamic> json) => DadjokesResponse(
    status: json['status'] as String? ?? '',
    error: json['error'],
    data: json['data'] != null ? DadjokesData.fromJson(json['data']) : null,
  );

  Map<String, dynamic> toJson() => {
    'status': status,
    if (error != null) 'error': error,
    if (data != null) 'data': data,
  };
}

/// Response data for the Dad Jokes API.

class DadjokesData {
  String? joke;

  DadjokesData({
    this.joke,
  });

  factory DadjokesData.fromJson(Map<String, dynamic> json) => DadjokesData(
      joke: json['joke'],
    );
}
