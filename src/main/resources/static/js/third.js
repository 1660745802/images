//插件
(function() {
    
    function lightSlider(section) {
        return new lightSlider.prototype.initSection(section);
    }

    lightSlider.prototype = {
        initSection: function(section) {
            var _this = this;
            this.banner = section.getElementsByClassName('banner');
            this.control = section.getElementsByClassName('control')[0];
            this.buildSpan(this.banner.length);
            this.span = section.getElementsByTagName('span');
            this.control.onclick = function (e) {
                if (e.target.nodeName != 'SPAN') {return ;}
                _this.jumpTo(e.target.dataset['index']*1);
            }
        },

        buildSpan: function(num) {
            let html = ``;
            for (let i = 0; i < num; i++) {
                html += `<span data-index=${i}></span>`;
            }
            this.control.innerHTML = html;
        },

        jumpTo: function (idx) {
            this.banner[0].style.marginLeft = `-${idx*100}%`;
        }
    }

    lightSlider.prototype.initSection.prototype = lightSlider.prototype;
    window.lightSlider = lightSlider;//绑定到window上，这样外界才能调用插件
}) ()