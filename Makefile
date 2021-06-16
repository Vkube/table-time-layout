export CI=true

test:
	npm test -s

prepare:
	npm test -s -- -u
