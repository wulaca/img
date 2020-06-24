if ( E.bgm.audio && E.screen == 'pc' ) {

function lcz(){
var _this = this;
this.geci_object, this.geci_lines, this.upkp, this.classV1, this.classV2, this.initTop, this.center, this.empty, this.isDropgeci, this.width, this.height, this.align, this.oneline, this.luminous, this.change, this.staue = !0, this.tag = {}, this.mould = '<ul style="height: 184px;list-style: none;position: relative;line-height: 1.4;padding: 0 15px;overflow-y: hidden;display:none;"></ul>', this.getgeci = "Value";
var errmsg = "程序发生异常，无法继续了！";
this.toTimer = function(e) {
	var t, n;
	return t = Math.floor(e / 60), t = isNaN(t) ? "--" : t >= 10 ? t : "0" + t, n = Math.floor(e % 60), n = isNaN(n) ? "--" : n >= 10 ? n : "0" + n, t + ":" + n
}, this.addgeci = function(e, t, n) {
	var r = document.createElement("li");
	r.innerHTML = t ? t : "", r.className = e ? e : "", r.lang = n ? n : "", this.geci_object.appendChild(r), this.geci_lines.push(r)
}, this.getgeciByValue = function(e) {
	le = this.geci_lines.length, e = "^" + e + ".*";
	for (var t = 0; t < le; t++) {
		if (this.geci_lines[t].lang.search(e) == 0) {
			return this.geci_lines[t]
		}
	}
	return null
}, this.getgeciByValueInd = function(e) {
	le = this.geci_lines.length - 1;
	for (var t = le; t >= 0; t--) {
		p = this.geci_lines[t].lang;
		if (p && p < e) {
			return this.geci_lines[t]
		}
	}
	return null
}, this.setClassName = function(e, t) {
	e && (e.className = t)
}, this.upTop = function(e) {
	var t = e.offsetTop,
		n = this.geci_object.scrollTop,
		r = t - this.center;
	this.myf(this.geci_object, n, r)
}, this.remove = function() {
	if (this.geci_lines != null) {
		for (var e = 0; e < this.geci_lines.length; e++) {
			this.geci_object.removeChild(this.geci_lines[e])
		}
	}
	this.geci_lines = new Array, !this.empty && this.empty != 0 && alert("empty 属性有误! 该值必须>=零")
}, this.load = function(json, fun) {
	gecis = json.gecis, end = json[this.tag.end];
	with(this) {
		remove(), _addgeci(json[this.tag.sname]), _addgeci(json[this.tag.cname]), _addgeci(json[this.tag.qname]), _addgeci(json[this.tag.bname]), _addgeci(json[this.tag.sgname]), _addgeci(json[this.tag.special]), _addgeci(json[this.tag.kname])
	}
	if (gecis) {
		for (var index in gecis) {
			this.addgeci(this.classV1, gecis[index].name, gecis[index].time)
		}
	}
	end && (end.time ? this.addgeci(this.classV1, end.end, end.time) : this.addgeci(this.classV1, end)), typeof fun == "function" && fun.call(null, null)
}, this._addgeci = function(e) {
	e && (e.time ? this.addgeci(this.classV1, e.name, e.time) : this.addgeci(this.classV1, e))
}, this.Read = function(e, t) {
	if (t != null && typeof t == "function") {
		return t.call(this, e)
	}
	var n = {};
	n.gecis = new Array;
	var r = e.split("["),
		i = r.length;
	for (var s = 0; s < i; s++) {
		var o = r[s],
			u = o.split("]");
		if (u.length == 2) {
			if (u[0].search("^[0-9]{2}:[0-9]{2}.[0-9]{1,3}$") < 0) {
				title = u[0].split(":"), n = tagswitch(title, n)
			} else {
				var a = {
					time: u[0],
					name: u[1]
				};
				n.gecis.push(a)
			}
		}
	}
	return n
}, this.vls1 = function(e) {
	var n = {};
	n.gecis = new Array;
	var r = e.length,
		i = 0,
		s = 0,
		o = new Array;
	for (var u = 0; u < r; u++) {
		e[u] == "[" && u > 8 && (e.slice(u - 9, u - 1) + "").search("^[0-9]{2}:[0-9]{2}.[0-9]{1,3}$") < 0 && (o.push(e.substring(i, u)), i = u)
	}
	o.push(e.substring(i, r));
	var a = {},
		f = [];
	for (var u = 0; u < o.length; u++) {
		var l = o[u],
			c = l.split("]");
		if (c.length === 2) {
			(c[0] + "").search("^\\[[0-9]{2}:[0-9]{2}.[0-9]{1,3}$") < 0 ? (c[0] = c[0].slice(1), title = c[0].split(":"), n = tagswitch(title, n)) : (h = c[0].slice(1) + "", a[h] = c[1], f.push(h))
		} else {
			if (c.length > 2) {
				var h, e;
				e = c[c.length - 1];
				for (var p in c) {
					c[p].search("^\\[[0-9]{2}:[0-9]{2}.[0-9]{1,3}$") == 0 && (h = c[p].slice(1) + "", a[h] = e, f.push(h))
				}
			}
		}
	}
	f = f.sort();
	for (var p in f) {
		t = f[p];
		var d = {
			time: t,
			name: a[t]
		};
		n.gecis.push(d)
	}
	return n
};
var tagswitch = function(e, t) {
		e.length === 2 && (tp = e[1]), tag = _this.tag;
		switch (e[0]) {
		case tag.sname:
			t[tag.sname] = tp;
			break;
		case tag.cname:
			t[tag.cname] = tp;
			break;
		case tag.qname:
			t[tag.qname] = tp;
			break;
		case tag.bname:
			t[tag.bname] = tp;
			break;
		case tag.sgname:
			t[tag.sgname] = tp;
			break;
		case tag.special:
			t[tag.special] = tp;
			break;
		case tag.kname:
			t[tag.kname] = tp;
			break;
		case tag.end:
			t[tag.end] = tp
		}
		return t
	};
this.myf_Init = function() {
	this.geci_object.innerHTML = this.mould, asc = this.geci_object = this.geci_object.firstChild, asc.style.width = this.width, asc.style.height = this.height, asc.style.textAlign = this.align, this.oneline ? (this.empty = 0, this.center = 5) : (this.empty = 5, this.center = this.geci_object.style.height / 2 | 2), this.isDropgeci && this.logon(!1)
}, this.setoccupy = function(e, t) {
	e.style.display = "block", this.setClassName(e, this.classV2), this.upTop(e), this.upkp && this.unoccupy(this.upkp), this.upkp = e, t && t(e)
}, this.unoccupy = function(e, t) {
	this.setClassName(e, this.classV1), this.oneline && (e.style.display = "none"), t && t(e)
}, this.torun = function(time) {
	if (!this.staue) {
		return !1
	}
	var time = this.toTimer(Math.round((time | event.srcElement.currentTime) * 100) / 100),
		line = eval("this.getgeciBy" + this.getgeci + "(time)");
	line && this.upkp != line && this.setoccupy(line)
}, this.logon = function(e) {
	if (window.FileReader) {
		var t = this.geci_object;
		e && (t = document.getElementById(e));

		function n(e) {
			e.stopPropagation(), e.preventDefault();
			var t = e.dataTransfer.files;
			for (var n = 0, r; r = t[n]; n++) {
				var i = new FileReader;
				i.onloadend = function(e) {
					return function(e) {
						img = e.target.result, img && _this.load(_this.Read(img))
					}
				}(r), i.readAsText(r)
			}
		}
		function r(e) {}
		function i(e) {}
		function s(e) {
			e.stopPropagation(), e.preventDefault()
		}
		t.addEventListener("dragenter", r, !1), t.addEventListener("dragover", s, !1), t.addEventListener("drop", n, !1), t.addEventListener("dragleave", i, !1), t.addEventListener("ondragend", i, !1)
	} else {
		alert("你的浏览器不支持啊，同学")
	}
};
var timer = null;
this.myf = function(e, t, n) {
	timer != null && clearTimeout(timer), this.isUpOrDown(e, t, n)
}, getUpValue = function(e, t) {
	return t - e > 100 ? e += 30 : t - e > 50 ? e += 10 : t - e > 20 ? e += 5 : t - e > 1 && e++, e
}, getDowmValue = function(e, t) {
	return e - t > 100 ? e -= 30 : e - t > 50 ? e -= 10 : e - t > 20 ? e -= 5 : e - t > 1 && e--, e
}, this.isUpOrDown = function(e, t, n) {
	t < n ? this.toUp(e, t, n) : this.toDown(e, t, n)
}, this.toUp = function(e, t, n) {
	timer = setInterval(function() {
		t >= n && (clearTimeout(timer), timer = null, e.scrollTop = n), e.scrollTop = t, t = getUpValue(t, n)
	}, 10)
}, this.toDown = function(e, t, n) {
	timer = setInterval(function() {
		t <= n && (clearTimeout(timer), timer = null, e.scrollTop = n), e.scrollTop = t, t = getDowmValue(t, n)
	}, 30)
}, this.destory = function() {}
}
geci = {
	msg: {
		ms1: "元素位置没有给出！ error : 103",
		ms2: "请给出歌词的链接地址，或文本内容！ error : 105"
	},
	tag: {
		sname: "ti",
		cname: "cl",
		qname: "cs",
		bname: "ps",
		sgname: "ar",
		special: "al",
		kname: "by",
		end: "end"
	},
	build: function(b, a) {
		var c = new lcz;
		return c.tag = geci.tag, b.object ? c.geci_object = document.getElementById(b.object) : alert(geci.msg.ms1), c.initTop = b["initTop"] != null ? b.initTop : 0, c.center = b["center"] != null ? b.center : 0, c.empty = b["empty"] != null ? b.empty : 0, c.isDropgeci = b["isDropgeci"] != null ? b.isDropgeci : !0, c.getgeci = b["seekMark"] != null ? b.seekMark : "Value", a && (c.classV1 = a["notoccupy"] != null ? a.notoccupy : "geci_moonlight", c.classV2 = a["occupy"] != null ? a.occupy : "geci_attention", c.width = a["width"] != null ? a.width : "550px", c.height = a["height"] != null ? a.height : "200px", c.align = a["align"] != null ? a.align : "left", c.oneline = a["oneline"] != null ? a.oneline : !1), c.myf_Init(), geci.readgeci(c, b.readType, {
			url: b.geciUrl ? b.geciUrl : null,
			text: b.geciText ? b.geciText : null
		}, function() {
			c.geci_object.scrollTop = c.initTop, c.oneline && (c.geci_object.className += " geci_hide"), b.syntony && b.syntony(c)
		}) && b.open && geci.open(c), b.media && (mp = document.getElementById(b.media), window.attachEvent ? mp.attachEvent("ontimeupdate", function() {
			c.torun()
		}) : mp.addEventListener("timeupdate", function() {
			c.torun()
		}, !1)), c
	},
	readgeci: function(d, b, f, c) {
		var a = "";
		if (f.text) {
			a = f.text
		} else {
			if (!f.url) {
				return alert(geci.msg.ms2), !1
			}
			xmlhttp = null, window.XMLHttpRequest ? xmlhttp = new XMLHttpRequest : window.ActiveXObject && (xmlhttp = new ActiveXObject("Microsoft.XMLHTTP")), xmlhttp != null && (xmlhttp.onreadystatechange = function() {
				if (xmlhttp.readyState == 4) {
					if (xmlhttp.status == 200) {
						return a = xmlhttp.responseText, a = a.replace(/<\/?.+?>/g, "").replace(/[\r\n]/g, ""), d.load(d.Read(a, b), c), !0
					}
					//alert("在获取url 歌词的时候发生了错误:" + xmlhttp.statusText)
					$('#lrc_2 ul').append('<li style="color: #69d2e7;">暂无歌词</li>');
				}
			}, xmlhttp.open("GET", f.url, !0), xmlhttp.send(null))
		}
		return d.load(d.Read(a, b), c), !0
	},
	open: function(a) {
		a.geci_object && (a.geci_object.style.display = "block"), a.staue = !0
	},
	close: function(a) {
		a.geci_object && (a.geci_object.style.display = "none"), a.staue = !1
	},
	suspend: function(a) {
		a.geci_object && (a.staue = !1)
	},
	destroy: function(a) {
		geci.close(a), a.remove(a.geci_object)
	},
	setProgress: function(b, a) {
		b.torun(a)
	}
};

var bgm = $('#bgm'), 
	bgm_title = $('#bgm-title'),
	listen = $('#listen'),
	listen_temp = $('#listen #temp'),
	listen_list = $('#listen #playlist'),
	listen_cover = $('#listen .cover'),
	listen_title = $('#listen .title'),
	listen_items = $('#listen .list .items'),
	listen_audio = $('#listen audio.bgm'),
	list_page_btn = $('.list-page-btn'),
	song_msg = $('#song-msg'),
	video = $('#bgvideo video');

var btn_play = $('#listen .play'),
	btn_rewind = $('#listen .rewind'),
	btn_fastforward = $('#listen .fastforward'),
	btn_onlist = $('#listen .onlist'),
	btn_onsource = $('#listen #onsource');

var repeat = localStorage.repeat || 0,
	shuffle = localStorage.shuffle || 'on',
	continous = true,
	autoplay = true;

var time = new Date(),
	isdelay = false,
	timeout = false,
	item_num = 0,
	null_num = 0,
	old_data,
	listLi,
	temp_id,
	isPlaying,
	playCounts,
	currentTrack,
	clearautoplay,
	song_name,
	list_height,
	list_page_num,
	audio = listen_audio[0],
	//api = listen_temp.data('api');

	shuffle = E.bgm.shuffle == 'on' ? 'on' : 'off';

var lrc_div = '<section id="song-lrc" class="lyric-text"><div id="lrcWrap" class="lrc-wrap lrc-wrap-open"><div id="lrcBox" class="lrc-box"><div id="lrc_2"></div></div></div><div class="lyric-script"></div></section>';

var addscript = function(data) {
	var script = '<script type="text/javascript">'+data+'</script>';
	listen_temp.html(script);
	if (E.bgm.showlrc == 'on') $('#wrapper').append(lrc_div);
}

var playTisp = function(i,type) {
	var item = playlist[i];
	switch(type) {
		case 'play' :
		tips_update('正在播放：' + item.title+' - '+item.artist);
		break;

		case 'pause' :
		tips_update('音乐已暂停。');
		break;

		case 'autoplay' :
		tips_update('即将播放：' + item.title+' - '+item.artist);
		break;

		case 'loading' :
		tips_update('正在加载歌单列表，稍后将自动播放。');
		break;
	}
}

var addlist = function(list) {
	if (list.length == 0) {
		listen_items.append('<p>没有找到歌曲</p>');
	}
	else {
		for (var i=0; i<list.length; i++){
			var item = list[i];
			item_num = i;
			item_num++;
			listen_items.append('<li class="nowrap">'+item_num+'. '+item.title+' - '+item.artist+'</li>');
		}
	}
}

var loadlist = function(){
	listLi.each(function(i) {
		var _i = i;
		$(this).on('click', function() {
			currentTrack = _i;
			loadMusic(currentTrack);
		});
	});
}

var bgv_pause = function() {
	if (video.hasClass('instate')) {
		video[0].pause();
	}	
}

var bgv_play = function() {
	if (video.hasClass('instate')) {
		video[0].play();
	}
}

var play = function() {
	playTisp(currentTrack, 'play');
	audio.play();
	btn_play.addClass('active').html('&#xe66d;');
	isPlaying = true;
	bgv_pause();
}

var pause = function() {
	playTisp(currentTrack, 'pause');
	audio.pause();
	btn_play.removeClass('active').html('&#xe66e;');
	isPlaying = false;
	bgv_play();
}

var switchTrack = function(i) {
	if (i < 0){
		track = currentTrack = playlist.length - 1;
	} else if (i >= playlist.length){
		track = currentTrack = 0;
	} else {
		track = i;
	}
	loadMusic(track);
}

var shufflePlay = function() {
	var time = new Date(),
		lastTrack = currentTrack;
	currentTrack = time.getTime() % playlist.length;
	if (lastTrack == currentTrack) ++currentTrack;
	switchTrack(currentTrack);
}

var ended = function(){
	pause();
	audio.currentTime = 0;
	playCounts++;
	if (continous == true) isPlaying = true;
	// repeat： 1 单曲循环，2 列表循环，3 列表播放
	if (repeat == 1){
		play();
	} else {
		if (shuffle === 'on') {
			shufflePlay();
		} else {
			if (repeat == 2){
				switchTrack(++currentTrack);
			} else {
				if (currentTrack < playlist.length) switchTrack(++currentTrack);
			}
		}
	}
}

var afterLoad = function() {
	if (isPlaying == true) play();
}

var loadMusic = function(i) {
	var item = playlist[i];
	listen_title.html('正在加载 ...');
	$.getJSON(E.ajaxurl+'?action=ajax_music_info&mid='+item.mid+'&pid='+item.pid+'&source='+item.source, function(data) {
		listen_cover.attr('src', data.cover_url);
		listen_title.html(item.title +' - '+item.artist).attr('title', item.title+' - '+item.artist);
		listLi.removeClass('playing').eq(i).addClass('playing');
		//console.log(data.url);
		if (data.song_url == '') {
			null_num++;
			if (null_num > 0) {
				tips_update('跳过无效的歌曲，共'+null_num+'首。');
				listen_audio.attr('src','');
				if (null_num == item_num) {
					null_num = 0;
					setTimeout(function() {
						tips_update('无效的歌单，可能存在付费歌曲，正在加载默认歌单。');
						setTimeout(function() {
							addscript(old_data);
							listen_list.html('');
							currentTrack = shuffle === 'on' ? time.getTime() % playlist.length : 0;
							doData(0);
							temp_id = 0;
						}, 2000);
					}, 2000);
					
					return;
				}
				switchTrack(++currentTrack);
			}
		}
		else {
			listen_audio.attr('src',data.song_url);
			audio.addEventListener('ended', ended, false);
			audio.addEventListener('canplay', afterLoad, false);
			null_num = 0;
		}

		if ($('#song-lrc')[0]) {
			var lrc = E.lrcurl+'.php?action=lyric&id='+item.tid+'&source='+item.source;
			$('.lyric-script').html('<script>geci.build({object:"lrc_2",media:"audio",geciUrl:"'+lrc+'",readType:"vls1",open:true},{oneline:false,height:"28px",width:"auto"});</script>');
		}
		
	});
}

var is_autoplay = function() {
	if (E.bgv == 'off') {
		if (E.bgm.autoplay == 'on') {
			playTisp(currentTrack, 'autoplay');
			setTimeout(function(){
				audio.addEventListener('canplay', play(), false);
			}, 3000);
			listen.show();
			$('#bgm').addClass('show');
			setTimeout(function(){
				listen.slideUp(150);
				$('#bgm').removeClass('show');
			}, 1000);
		}
	}
}

var doData = function(i) {
	addlist(playlist);
	listLi = $('#playlist li');
	loadlist();
	if (i == 0) {
		loadMusic(currentTrack);
	}
}

var original = function() {
	$.ajax({
		type: "GET",
		data: { 
			action: 'music_list_get',
			form: E.ajaxurl,
		},
		beforeSend: function() {
			bgm_title.html('Loading...').addClass('isloading');
		},
		success: function(data) {
			bgm_title.html('Music').removeClass('isloading');
			addscript(data);
			currentTrack = shuffle === 'on' ? time.getTime() % playlist.length : 0;
			doData(0);
			is_autoplay();
			old_data = data;
		}
	});
	return;
}

var search_data = function(song_name, list_height, list_page) {
	var data_source;
	$.each($('.source-items input:radio:checked'),function(){data_source = $(this).val();});
    $.ajax({
        type: "GET",
		data: { 
			action: 'music_search_get',
			form: E.ajaxurl,
			name: song_name,
			source: data_source,
			page: list_page
		},
        dataType:'html',
        beforeSend: function() {
        	listen_list.css('height', list_height);
			listen_list.html('');
			loading_start(listen_list);
			currentTrack = 0;
			temp_id = 0;
			if (song_msg.val() != song_name) {
				song_msg.val(song_name);
			}
        },
        success: function(data) {
        	//console.log(list_height);
			addscript(data);
			loading_done(listen_list);
			if (isPlaying == true) {
				currentTrack = -1;
				doData(1);
			} else {
				doData(0);
			}
			listen_list.css('height', 'auto');
			list_page_btn.show(100);
		},
        error: function(request) {
        	alert('非法操作。');
        }
    });

    return;
}
$('.music-search').bind('submit', function(e) {
	e.preventDefault();
	list_height = listen_list.height();
	song_name = song_msg.val();
	list_page_num = 1;
  	search_data(song_name, list_height, list_page_num);
});
$('#list-previous').on('click', function() {
	list_page_num = list_page_num-1;
	if (list_page_num < 1) {
		tips_update('已经是第一页。');
		list_page_num = 1;
	} else {
		search_data(song_name, list_height, list_page_num);
	}
});
$('#list-next').on('click', function() {
	list_page_num = list_page_num+1;
	search_data(song_name, list_height, list_page_num);
});

var single_music = function() {
	$('#button.music-id').unbind('click').bind('click', function() {
		if (isdelay == false) {
			var mid = $(this).data('mid'),
				list_source = $(this).data('source'),
				list_type = $(this).data('type') == 'playlist' ? '0' : '1';
			if (temp_id == mid) {
				tips_update('该歌单已经在播放列表中。');
				return;
			}
			if (bgm_title.hasClass('isloading')) {
				tips_update('正在初始化播放器。');
				return;
			}
			clearTimeout(clearautoplay);
			$.ajax({
				type: "GET",
				data: { 
					action: 'music_json_get',
					form: E.ajaxurl,
					id: mid,
					type: list_type,
					source: list_source,
					//echo: true
				},
				beforeSend: function() {
					bgm_title.html('Loading...');
					listen_list.html('');
					loading_start(listen_list);
					playTisp(false, 'loading');
					audio.pause();
					btn_play.removeClass('active').html('&#xe66e;');
					isPlaying = false;
					currentTrack = 0;
					temp_id = mid;
					isdelay = true;
					list_page_btn.hide(100);
					song_msg.val('');
				},
				success: function(data) {
					//console.log(data.length);
					bgm_title.html('Music');
					tips_update('歌单加载完成，即将自动播放。');
					loading_done(listen_list);
					if (data.length > 18) {
						addscript(data);
						doData(0);
						clearautoplay = setTimeout(function() {
							audio.addEventListener('canplay', play(), false);
						}, 2000);
					}
					else{
						tips_update('无效的歌单，正在加载默认歌单。');
						setTimeout(function() {
							addscript(old_data);
							currentTrack = shuffle === 'on' ? time.getTime() % playlist.length : 0;
							listen_list.html('');
							doData(0);
							temp_id = 0;
						}, 2000);
					}
				},
				error: function(request) {
					alert('未知错误。');
				}
			});
			setTimeout(function() {
				isdelay = false;
			}, 2000);
		}
		return false;
	});
}

btn_play.on('click', function() {
	if ($(this).hasClass('active')) {
		pause();
	} else {
		play();
	}
});
btn_rewind.on('click', function() {
	if (shuffle === 'on') {
		shufflePlay();
	} else {
		switchTrack(--currentTrack);
	}
});
btn_fastforward.on('click', function() {
	if (shuffle === 'on') {
		shufflePlay();
	} else {
		switchTrack(++currentTrack);
	}
});
btn_onlist.on('click', function() {
	var list = $('#listen .list');
	if (list.hasClass('show')) {
		list.removeClass('show').css({'height':'0'});
	}else{
		list.addClass('show').css({'height':'auto'});
	}
});
btn_onsource.on('click', function() {
	var list= $('#listen .source-items');
	if (list.hasClass('show')) {
		list.removeClass('show').css({'height':'0'});
		$(this).removeClass('deg');
	}else{
		list.addClass('show').css({'height':'36px'});
		$(this).addClass('deg');
	}
});
bgm.on('click', function(e) {
	_this = $(this);
	if (!$('#bgm.show')[0]) {
		listen.show();
		_this.addClass('show');
	}
	else {
		listen.slideUp(150);
		_this.removeClass('show');
	}
	$(document).one('click', function() {
		listen.slideUp(150);
		_this.removeClass('show');
	});
	e.stopPropagation();
	listen.on('click', function(e) {
		e.stopPropagation();
	});
});
original();

}
