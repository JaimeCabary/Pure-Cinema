import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'main_nav_screen.dart';

class LandingScreen extends StatefulWidget {
  const LandingScreen({super.key});

  @override
  State<LandingScreen> createState() => _LandingScreenState();
}

class _LandingScreenState extends State<LandingScreen> {
  String _keyBuffer = '';
  final FocusNode _focusNode = FocusNode();

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      _focusNode.requestFocus();
    });
  }

  @override
  void dispose() {
    _focusNode.dispose();
    super.dispose();
  }

  void _handleKey(RawKeyEvent event) {
    if (event is RawKeyDownEvent) {
      final character = event.character;
      if (character != null && character.length == 1 && RegExp(r'[a-zA-Z]').hasMatch(character)) {
        _keyBuffer += character.toLowerCase();
        if (_keyBuffer.length > 10) {
          _keyBuffer = _keyBuffer.substring(_keyBuffer.length - 10);
        }

        if (_keyBuffer.contains('shalom')) {
          _keyBuffer = '';
          _enterAppAsShalom();
        }
      }
    }
  }

  Future<void> _enterAppAsShalom() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('user_name', 'Shalom');
    await prefs.setString('user_role', 'Head & PM / Frontend Lead');
    if (!mounted) return;
    Navigator.of(context).pushReplacement(
      PageRouteBuilder(
        pageBuilder: (_, __, ___) => const MainNavScreen(),
        transitionsBuilder: (_, a, __, c) => FadeTransition(opacity: a, child: c),
        transitionDuration: const Duration(milliseconds: 200),
      ),
    );
  }

  void _enterApp() {
    Navigator.of(context).pushReplacement(
      PageRouteBuilder(
        pageBuilder: (_, __, ___) => const MainNavScreen(),
        transitionsBuilder: (_, a, __, c) => FadeTransition(opacity: a, child: c),
        transitionDuration: const Duration(milliseconds: 200),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return RawKeyboardListener(
      focusNode: _focusNode,
      onKey: _handleKey,
      child: Scaffold(
        backgroundColor: const Color(0xFF050505),
        body: Stack(
          children: [
            // Background Cinematic Image
            Positioned.fill(
              child: Opacity(
                opacity: 0.35,
                child: Image.network(
                  'https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg',
                  fit: BoxFit.cover,
                  errorBuilder: (_, __, ___) => Container(color: const Color(0xFF050505)),
                ),
              ),
            ),

            // Deep Gradient Vignette
            Positioned.fill(
              child: Container(
                decoration: const BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    colors: [
                      Colors.black87,
                      Colors.transparent,
                      Color(0xFF050505),
                    ],
                    stops: [0.0, 0.4, 1.0],
                  ),
                ),
              ),
            ),

            // Content
            SafeArea(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 28.0, vertical: 20.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    // Top Bar Logo (Double tap secret shortcut)
                    GestureDetector(
                      onDoubleTap: _enterAppAsShalom,
                      child: Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.all(6),
                            decoration: BoxDecoration(
                              color: Colors.white,
                              borderRadius: BorderRadius.circular(6),
                            ),
                            child: const Icon(Icons.movie_filter, color: Colors.black, size: 18),
                          ),
                          const SizedBox(width: 10),
                          Text(
                            'PURE CINEMA',
                            style: GoogleFonts.outfit(
                              color: Colors.white,
                              fontSize: 14,
                              fontWeight: FontWeight.w900,
                              letterSpacing: 3.0,
                            ),
                          ),
                        ],
                      ),
                    ),

                    const Spacer(),

                    // Hero Headlines
                    Text(
                      'UNCOMPROMISED\nCINEMA 4K',
                      style: GoogleFonts.outfit(
                        color: Colors.white,
                        fontSize: 38,
                        fontWeight: FontWeight.w900,
                        height: 1.05,
                        letterSpacing: -0.5,
                      ),
                    ),
                    const SizedBox(height: 12),
                    Text(
                      'Experience master-quality motion pictures, 60 FPS live broadcast suite, and curated visual arts.',
                      style: GoogleFonts.outfit(
                        color: Colors.white70,
                        fontSize: 14,
                        fontWeight: FontWeight.w300,
                        height: 1.4,
                      ),
                    ),
                    const SizedBox(height: 28),

                    // Enter Platform Button
                    SizedBox(
                      width: double.infinity,
                      height: 52,
                      child: ElevatedButton(
                        style: ElevatedButton.styleFrom(
                          backgroundColor: Colors.white,
                          foregroundColor: Colors.black,
                          elevation: 8,
                          shape: RoundedRectangleBorder(
                            borderRadius: BorderRadius.circular(8),
                          ),
                        ),
                        onPressed: _enterApp,
                        child: Text(
                          'ENTER PLATFORM',
                          style: GoogleFonts.outfit(
                            fontSize: 13,
                            fontWeight: FontWeight.w900,
                            letterSpacing: 2.0,
                          ),
                        ),
                      ),
                    ),

                    const SizedBox(height: 20),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
