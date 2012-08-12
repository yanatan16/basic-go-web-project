//
// Authorization Page Module
//
Auth = function() {

	var check_uname = function(enterred) {
		return enterred === $('#username').data('username');
	}

	var update_authorized = function() {
		$('#login').hide();
		$('#msg').val('<p class="success">Authorization complete! Close this window to continue with your game. Happy chatting!</p>')
	}

	var update_badlogin = function() {
		$('#login').add('<p class="bad_login">Error. Your login is incorrect. Try again</p>');
	}

	var login = function(e) {
		e.preventDefault();

		var uname = $("#username"),
			passwd = $("#password");

		$.ajax({
			url: '/api/auth',
			type: 'post',
			data: {
				username: uname,
				password: passwd
			},
			success: function(data) {
				if data.success {
					update_authorized();
				} else {
					update_badlogin();
				}
			}
		});

		return true;
	}

	var construct = function() {
		$("#login").submit(login);
	}

	return {
		init: construct
	};
}();