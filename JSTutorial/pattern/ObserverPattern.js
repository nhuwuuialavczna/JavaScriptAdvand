function ObserverList() {
    this.observerList = [];
}

ObserverList.prototype.add = function (obj) {
    this.observerList.push(obj);
};
ObserverList.prototype.count = function () {
    this.observerList.length;
};
ObserverList.prototype.remove = function (index) {
    this.observerList.splice(index, 1);
};
ObserverList.prototype.indexOf = function (obj) {
    this.observerList.forEach(function (i, t) {
        if (t === obj) {
            return i;
        }
    });
};
ObserverList.prototype.get = function (index) {
    this.observerList[index];
};


function ISubject() {
    this.Observers = new ObserverList();

}

ISubject.prototype.addObserver = function (observer) {
    this.Observers.add(observer);
};

ISubject.prototype.removeObserver = function (observer) {
    this.Observers.remove(this.Observers.indexOf(observer))
};

ISubject.prototype.notify = function (ctx) {
    for (var i = 0; i < this.Observers.count(); i++) {
        this.Observers.get(i).update(ctx);
    }
};

// observer interface
function IObserver() {
}

IObserver.prototype.update = function (val) {
    // implement in the concrete observer
};

// a method that helps sticking interface methods on a
var extend = function (obj, extension) {
    for (var k in extension) {
        obj[k] = extension[k];
    }
};

window.onload = function () {
    var subject = document.getElementById("subject");
    var observer1 = document.getElementById("observer1");
    var observer2 = document.getElementById("observer2");
    var observer3 = document.getElementById("observer3");
    extend(subject, new ISubject());
    extend(observer1, new IObserver());
    extend(observer2, new IObserver());
    extend(observer3, new IObserver());

    subject.addEventListener('keyup', function () {
        this.notify(this.value);
    }, false);
    subject.addObserver(observer1);
    subject.addObserver(observer2);
    subject.addObserver(observer3);

    observer1.update = function (val) {
        this.innerHTML = val;
    };
    observer2.update = function (val) {
        window.setTimeout(function () {
            this.innerHTML = val;
        },500);
    };
    observer3.update = function (val) {
        this.innerHTML = val;
    };

    window.setTimeout(function () {
        subject.removeObserver(observer3);
    },3000);
};