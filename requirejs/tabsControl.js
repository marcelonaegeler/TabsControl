define(
	'tabsControl'
	, []
	, function() {

		var tabPlugin = document.querySelectorAll('.tabGroup');

		if(!tabPlugin)
			return false;
		
		function TabElement(tabGroup) {
			this.tabGroup = tabGroup;
			this.tabItems = this.tabGroup.querySelector('.tabBody').children;
			this.tabLinks = this.tabGroup.querySelector('.tabNav').children;

			this.active = 0;
		}

		TabElement.prototype.setEvents = function() {
			var tabLinks = this.tabLinks;

			for(var i in tabLinks) {
				if(!parseInt(i) && parseInt(i) != 0)
					continue;

				tabLinks[i].setAttribute('rel', i);
				tabLinks[i].addEventListener('click', function(event) {
					event.preventDefault();
					// Se o target não for o próprio link, captura o rel do elemento pai (caso haja img dentro do link ou ícones...)
					var relActive = (event.target.rel) ? event.target.rel : event.target.parentElement.rel;

					this.active = parseInt(relActive);
					this.exec();
				}.bind(this), false);
			}
		};

		TabElement.prototype.exec = function() {
			var tabItems = this.tabItems;
			var tabLinks = this.tabLinks;

			for(var i in tabItems) {
				if(!parseInt(i) && parseInt(i) != 0)
					continue;

				parseInt(i) == this.active ? tabItems[i].style.display = "block" : tabItems[i].style.display = "none";
			}

			for(var i in tabLinks) {
				if(!parseInt(i) && parseInt(i) != 0)
					continue;
				
				parseInt(i) == this.active ? tabLinks[i].classList.add('active') : tabLinks[i].classList.remove('active');
			}
		};

		TabElement.prototype.init = function() {
			this.exec();
			this.setEvents();
		};

		for(var group in tabPlugin) {
			if(!parseInt(group) && parseInt(group) != 0)
				continue;
			var setEvents = true
				, active = 0;

			var tab = new TabElement(tabPlugin[group]).init();
		}
	}
);