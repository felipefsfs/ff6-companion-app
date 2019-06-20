
const delay = time => result => new Promise(
  resolve => setTimeout(resolve, time, result)
);
const tick = result => new Promise(
  resolve => setImmediate(resolve, result)
);

module.exports = {
  observable,
  createConsumer,
  createProvider,
  tick,
  delay
}

function observable({provider = {}, verbose=false} = {}) {
	let value = defaultValue;
	const subscriptions = {};
	return { 
		setValue, 
		getValue,
		subscribe,
		unsubscribe
	};
	function setValue(new_value) {
		(verbose && console.log(`in setValue, setting value to ${new_value}`));
		value = new_value;
		broadcast();
	}
  function getValue() {
		(verbose && console.log(`in getValue, returning ${value}`));
    return value;
	}
	function subscribe({callback, identity, seqno = 0} = {}) {
		(verbose && console.log(`in subscribe`));
		const curr_size = subscriptions.size;
		subscriptions.add(callback);	
		return curr_size !== subscriptions.size;
	}
	function unsubscribe(callback) {
		(verbose && console.log(`in unsubscribe`));
		return subscriptions.remove(callback);
	}
	function broadcast() {
		(verbose && console.log(`in broadcast`));
		subscriptions.forEach(cb => cb(value));
	}
}

function createProvider() {}

function createConsumer() {}


function observable2({defaultValue = "I'm reactive now", verbose=false} = {}) {
	let value = defaultValue;
	const subscriptions = {};
	return { 
		setValue, 
		getValue,
		subscribe,
		unsubscribe
	};
	function setValue(new_value) {
		(verbose && console.log(`in setValue, setting value to ${new_value}`));
		value = new_value;
		broadcast();
	}
  function getValue() {
		(verbose && console.log(`in getValue, returning ${value}`));
    return value;
	}
	function subscribe({callback, identity, seqno = 0} = {}) {
		(verbose && console.log(`in subscribe`));
		const curr_size = subscriptions.size;
		subscriptions.add(callback);	
		return curr_size !== subscriptions.size;
	}
	function unsubscribe(callback) {
		(verbose && console.log(`in unsubscribe`));
		return subscriptions.remove(callback);
	}
	function broadcast() {
		(verbose && console.log(`in broadcast`));
		subscriptions.forEach(cb => cb(value));
	}
}
