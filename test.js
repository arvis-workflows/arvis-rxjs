import test from 'ava';
import arvishTest from 'arvish-test';

test('observable result', async t => {
	const arvish = arvishTest();
	const result = await arvish('node index.js replaysubject');

	t.deepEqual(result, [
		{
			title: 'ReplaySubject',
			subtitle: 'Observable',
			autocomplete: 'ReplaySubject',
			arg: 'https://rxjs-dev.firebaseapp.com/api/index/class/ReplaySubject',
			quicklookurl: 'https://rxjs-dev.firebaseapp.com/api/index/class/ReplaySubject',
			icon: {
				path: './icons/class.png'
			}
		}
	]);
});

test('operator result', async t => {
	const arvish = arvishTest();
	const result = await arvish('node index.js mergeMap');

	t.deepEqual(result, [
		{
			title: 'mergeMap',
			subtitle: 'operator',
			autocomplete: 'mergeMap',
			arg: 'https://rxjs-dev.firebaseapp.com/api/operators/mergeMap',
			quicklookurl: 'https://rxjs-dev.firebaseapp.com/api/operators/mergeMap',
			icon: {
				path: './icons/function.png'
			}
		},
		{
			title: 'mergeMapTo',
			subtitle: 'operator',
			autocomplete: 'mergeMapTo',
			arg: 'https://rxjs-dev.firebaseapp.com/api/operators/mergeMapTo',
			quicklookurl: 'https://rxjs-dev.firebaseapp.com/api/operators/mergeMapTo',
			icon: {
				path: './icons/function.png'
			}
		}
	]);
});

test('deprecated', async t => {
	const arvish = arvishTest();
	const result = await arvish('node index.js combineLatest');

	t.deepEqual(result, [
		{
			title: 'combineLatest',
			subtitle: 'Observable',
			autocomplete: 'combineLatest',
			arg: 'https://rxjs-dev.firebaseapp.com/api/index/function/combineLatest',
			quicklookurl: 'https://rxjs-dev.firebaseapp.com/api/index/function/combineLatest',
			icon: {
				path: './icons/function.png'
			}
		},
		{
			title: 'combineLatest',
			subtitle: 'operator - deprecated',
			autocomplete: 'combineLatest',
			arg: 'https://rxjs-dev.firebaseapp.com/api/operators/combineLatest',
			quicklookurl: 'https://rxjs-dev.firebaseapp.com/api/operators/combineLatest',
			icon: {
				path: './icons/function-deprecated.png'
			}
		}
	]);
});
