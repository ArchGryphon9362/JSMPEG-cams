Stream = require('node-rtsp-stream');
stream = new Stream({
	name: 'name',
	streamUrl: 'rtsp://admin:@192.168.68.110/user=admin&password=&channel=1&stream=0.sdp?',
	wsPort: 9999,
	ffmpegOptions: { // options ffmpeg flags
		'-stats': '', // an option with no neccessary value uses a blank string
		'-r': 30 // options with required values specify the value after the key
	}
});
