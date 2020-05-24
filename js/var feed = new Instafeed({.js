 var feed = new Instafeed({
        get: 'tagged',
        tagName: 'ajith',
        clientId: '467ede5a6b9b48ae8e03f4e2582aeeb3',
        limit: 20,
        sortBy: 'most-recent',
        resolution: "low_resolution",
        template: '<div class="item"><img src="{{image}}"/></div>',
        after: function () {
            $('#instafeed > div:nth-child(1)').addClass('active');
        }
    });
    feed.run()