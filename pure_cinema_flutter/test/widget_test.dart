import 'package:flutter_test/flutter_test.dart';
import 'package:pure_cinema_flutter/main.dart';

void main() {
  testWidgets('App loads cleanly', (WidgetTester tester) async {
    await tester.pumpWidget(const PureCinemaApp());
    expect(find.text('PURE CINEMA'), findsWidgets);
  });
}
