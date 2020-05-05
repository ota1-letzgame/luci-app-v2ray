"use strict";"require form";"require uci";"require v2ray";return L.view.extend({load:function(){return v2ray.getLocalIPs()},render:function(e){void 0===e&&(e=[]);var o,s=new form.Map("v2ray","%s - %s".format(_("V2Ray"),_("Outbound"))),a=s.section(form.GridSection,"outbound");a.anonymous=!0,a.addremove=!0,a.sortable=!0,a.modaltitle=function(e){var o=uci.get("v2ray",e,"alias");return _("Outbound")+" » "+(null!=o?o:_("Add"))},a.tab("general",_("General Settings")),a.tab("stream",_("Stream Settings")),a.tab("other",_("Other Settings")),(o=a.taboption("general",form.Value,"alias",_("Alias"),_("Any custom string"))).rmempty=!1,(o=a.taboption("general",form.Value,"send_through",_("Send through"),_("An IP address for sending traffic out."))).datatype="ipaddr";for(var t=0,r=e;t<r.length;t++){var l=r[t];o.value(l)}return(o=a.taboption("general",form.ListValue,"protocol",_("Protocol"))).value("blackhole","Blackhole"),o.value("dns","DNS"),o.value("freedom","Freedom"),o.value("http","HTTP/2"),o.value("mtproto","MTProto"),o.value("shadowsocks","Shadowsocks"),o.value("socks","Socks"),o.value("vmess","VMess"),(o=a.taboption("general",form.ListValue,"s_blackhole_reponse_type","%s - %s".format("Blackhole",_("Response type")))).modalonly=!0,o.depends("protocol","blackhole"),o.value(""),o.value("none",_("None")),o.value("http","HTTP"),(o=a.taboption("general",form.ListValue,"s_dns_network","%s - %s".format("DNS",_("Network")))).modalonly=!0,o.depends("protocol","dns"),o.value(""),o.value("tcp","TCP"),o.value("udp","UDP"),(o=a.taboption("general",form.Value,"s_dns_address","%s - %s".format("DNS",_("Address")))).modalonly=!0,o.depends("protocol","dns"),(o=a.taboption("general",form.Value,"s_dns_port","%s - %s".format("DNS",_("Port")))).modalonly=!0,o.depends("protocol","dns"),o.datatype="port",(o=a.taboption("general",form.ListValue,"s_freedom_domain_strategy","%s - %s".format("Freedom",_("Domain strategy")))).modalonly=!0,o.depends("protocol","freedom"),o.value(""),o.value("AsIs"),o.value("UseIP"),o.value("UseIPv4"),o.value("UseIPv6"),(o=a.taboption("general",form.Value,"s_freedom_redirect","%s - %s".format("Freedom",_("Redirect")))).modalonly=!0,o.depends("protocol","freedom"),(o=a.taboption("general",form.Value,"s_freedom_user_level","%s - %s".format("Freedom",_("User level")))).modalonly=!0,o.depends("protocol","freedom"),o.datatype="uinteger",(o=a.taboption("general",form.Value,"s_http_server_address","%s - %s".format("HTTP",_("Server address")))).modalonly=!0,o.depends("protocol","http"),o.datatype="host",(o=a.taboption("general",form.Value,"s_http_server_port","%s - %s".format("HTTP",_("Server port")))).modalonly=!0,o.depends("protocol","http"),o.datatype="port",(o=a.taboption("general",form.Value,"s_http_account_user","%s - %s".format("HTTP",_("User")))).modalonly=!0,o.depends("protocol","http"),(o=a.taboption("general",form.Value,"s_http_account_pass","%s - %s".format("HTTP",_("Password")))).modalonly=!0,o.depends("protocol","http"),o.password=!0,(o=a.taboption("general",form.Value,"s_shadowsocks_email","%s - %s".format("Shadowsocks",_("Email")))).modalonly=!0,o.depends("protocol","shadowsocks"),(o=a.taboption("general",form.Value,"s_shadowsocks_address","%s - %s".format("Shadowsocks",_("Address")))).modalonly=!0,o.depends("protocol","shadowsocks"),o.datatype="host",(o=a.taboption("general",form.Value,"s_shadowsocks_port","%s - %s".format("Shadowsocks",_("Port")))).modalonly=!0,o.depends("protocol","shadowsocks"),o.datatype="port",(o=a.taboption("general",form.ListValue,"s_shadowsocks_method","%s - %s".format("Shadowsocks",_("Method")))).modalonly=!0,o.depends("protocol","shadowsocks"),o.value(""),o.value("aes-256-cfb"),o.value("aes-128-cfb"),o.value("chacha20"),o.value("chacha20-ietf"),o.value("aes-256-gcm"),o.value("aes-128-gcm"),o.value("chacha20-poly1305"),o.value("chacha20-ietf-poly1305"),(o=a.taboption("general",form.Value,"s_shadowsocks_password","%s - %s".format("Shadowsocks",_("Password")))).modalonly=!0,o.depends("protocol","shadowsocks"),o.password=!0,(o=a.taboption("general",form.Value,"s_shadowsocks_level","%s - %s".format("Shadowsocks",_("User level")))).modalonly=!0,o.depends("protocol","shadowsocks"),o.datatype="uinteger",(o=a.taboption("general",form.Flag,"s_shadowsocks_ota","%s - %s".format("Shadowsocks",_("OTA")))).modalonly=!0,o.depends("protocol","shadowsocks"),(o=a.taboption("general",form.Value,"s_socks_server_address","%s - %s".format("Socks",_("Server address")))).modalonly=!0,o.depends("protocol","socks"),o.datatype="host",(o=a.taboption("general",form.Value,"s_socks_server_port","%s - %s".format("Socks",_("Server port")))).modalonly=!0,o.depends("protocol","socks"),o.datatype="port",(o=a.taboption("general",form.Value,"s_socks_account_user","%s - %s".format("Socks",_("User")))).modalonly=!0,o.depends("protocol","socks"),(o=a.taboption("general",form.Value,"s_socks_account_pass","%s - %s".format("Socks",_("Password")))).modalonly=!0,o.depends("protocol","socks"),o.password=!0,(o=a.taboption("general",form.Value,"s_socks_user_level","%s - %s".format("Socks",_("User level")))).modalonly=!0,o.depends("protocol","socks"),o.datatype="uinteger",(o=a.taboption("general",form.Value,"s_vmess_address","%s - %s".format("VMess",_("Address")))).modalonly=!0,o.depends("protocol","vmess"),o.datatype="host",(o=a.taboption("general",form.Value,"s_vmess_port","%s - %s".format("VMess",_("Port")))).modalonly=!0,o.depends("protocol","vmess"),o.datatype="port",(o=a.taboption("general",form.Value,"s_vmess_user_id","%s - %s".format("VMess",_("User ID")))).modalonly=!0,o.depends("protocol","vmess"),(o=a.taboption("general",form.Value,"s_vmess_user_alter_id","%s - %s".format("VMess",_("Alter ID")))).modalonly=!0,o.depends("protocol","vmess"),o.datatype="and(uinteger, max(65535))",(o=a.taboption("general",form.ListValue,"s_vmess_user_security","%s - %s".format("VMess",_("Security")))).modalonly=!0,o.depends("protocol","vmess"),o.value(""),o.value("auto",_("Auto")),o.value("aes-128-gcm"),o.value("chacha20-poly1305"),o.value("none",_("None")),(o=a.taboption("general",form.Value,"s_vmess_user_level","%s - %s".format("VMess",_("User level")))).modalonly=!0,o.depends("protocol","vmess"),o.datatype="uinteger",(o=a.taboption("stream",form.ListValue,"ss_network",_("Network"))).value(""),o.value("tcp","TCP"),o.value("kcp","mKCP"),o.value("ws","WebSocket"),o.value("http","HTTP/2"),o.value("domainsocket","Domain Socket"),o.value("quic","QUIC"),(o=a.taboption("stream",form.ListValue,"ss_security",_("Security"))).modalonly=!0,o.value(""),o.value("none",_("None")),o.value("tls","TLS"),(o=a.taboption("stream",form.Value,"ss_tls_server_name","%s - %s".format("TLS",_("Server name")))).modalonly=!0,o.depends("ss_security","tls"),(o=a.taboption("stream",form.Value,"ss_tls_alpn","%s - %s".format("TLS","ALPN"))).modalonly=!0,o.depends("ss_security","tls"),o.placeholder="http/1.1",(o=a.taboption("stream",form.Flag,"ss_tls_allow_insecure","%s - %s".format("TLS",_("Allow insecure")))).modalonly=!0,o.depends("ss_security","tls"),(o=a.taboption("stream",form.Flag,"ss_tls_allow_insecure_ciphers","%s - %s".format("TLS",_("Allow insecure ciphers")))).modalonly=!0,o.depends("ss_security","tls"),(o=a.taboption("stream",form.Flag,"ss_tls_disable_system_root","%s - %s".format("TLS",_("Disable system root")))).modalonly=!0,o.depends("ss_security","tls"),(o=a.taboption("stream",form.ListValue,"ss_tls_cert_usage","%s - %s".format("TLS",_("Certificate usage")))).modalonly=!0,o.depends("ss_security","tls"),o.value(""),o.value("encipherment"),o.value("verify"),o.value("issue"),(o=a.taboption("stream",form.Value,"ss_tls_cert_fiile","%s - %s".format("TLS",_("Certificate file")))).modalonly=!0,o.depends("ss_security","tls"),(o=a.taboption("stream",form.Value,"ss_tls_key_file","%s - %s".format("TLS",_("Key file")))).modalonly=!0,o.depends("ss_security","tls"),(o=a.taboption("stream",form.ListValue,"ss_tcp_header_type","%s - %s".format("TCP",_("Header type")))).modalonly=!0,o.depends("ss_network","tcp"),o.value(""),o.value("none",_("None")),o.value("http","HTTP"),(o=a.taboption("stream",form.Value,"ss_tcp_header_request_version","%s - %s".format("TCP",_("HTTP request version")))).modalonly=!0,o.depends("ss_tcp_header_type","http"),(o=a.taboption("stream",form.ListValue,"ss_tcp_header_request_method","%s - %s".format("TCP",_("HTTP request method")))).modalonly=!0,o.depends("ss_tcp_header_type","http"),o.value(""),o.value("GET"),o.value("HEAD"),o.value("POST"),o.value("DELETE"),o.value("PUT"),o.value("PATCH"),o.value("OPTIONS"),(o=a.taboption("stream",form.Value,"ss_tcp_header_request_path","%s - %s".format("TCP",_("Request path")))).modalonly=!0,o.depends("ss_tcp_header_type","http"),(o=a.taboption("stream",form.DynamicList,"ss_tcp_header_request_headers","%s - %s".format("TCP",_("Request headers")),_("A list of HTTP headers, format: <code>header=value</code>. eg: %s").format("Host=www.bing.com"))).modalonly=!0,o.depends("ss_tcp_header_type","http"),(o=a.taboption("stream",form.Value,"ss_tcp_header_response_version","%s - %s".format("TCP",_("HTTP response version")))).modalonly=!0,o.depends("ss_tcp_header_type","http"),(o=a.taboption("stream",form.Value,"ss_tcp_header_response_status","%s - %s".format("TCP",_("HTTP response status")))).modalonly=!0,o.depends("ss_tcp_header_type","http"),(o=a.taboption("stream",form.Value,"ss_tcp_header_response_reason","%s - %s".format("TCP",_("HTTP response reason")))).modalonly=!0,o.depends("ss_tcp_header_type","http"),(o=a.taboption("stream",form.DynamicList,"ss_tcp_header_response_headers","%s - %s".format("TCP",_("Response headers")),_("A list of HTTP headers, format: <code>header=value</code>. eg: %s").format("Host=www.bing.com"))).modalonly=!0,o.depends("ss_tcp_header_type","http"),(o=a.taboption("stream",form.Value,"ss_kcp_mtu","%s - %s".format("mKCP",_("Maximum transmission unit (MTU)")))).modalonly=!0,o.depends("ss_network","kcp"),o.datatype="and(min(576), max(1460))",o.placeholder="1350",(o=a.taboption("stream",form.Value,"ss_kcp_tti","%s - %s".format("mKCP",_("Transmission time interval (TTI)")))).modalonly=!0,o.depends("ss_network","kcp"),o.datatype="and(min(10), max(100))",o.placeholder="50",(o=a.taboption("stream",form.Value,"ss_kcp_uplink_capacity","%s - %s".format("mKCP",_("Uplink capacity")))).modalonly=!0,o.depends("ss_network","kcp"),o.datatype="uinteger",o.placeholder="5",(o=a.taboption("stream",form.Value,"ss_kcp_downlink_capacity","%s - %s".format("mKCP",_("Downlink capacity")))).modalonly=!0,o.depends("ss_network","kcp"),o.datatype="uinteger",o.placeholder="20",(o=a.taboption("stream",form.Flag,"ss_kcp_congestion","%s - %s".format("mKCP",_("Congestion enabled")))).modalonly=!0,o.depends("ss_network","kcp"),(o=a.taboption("stream",form.Value,"ss_kcp_read_buffer_size","%s - %s".format("mKCP",_("Read buffer size")))).modalonly=!0,o.depends("ss_network","kcp"),o.datatype="uinteger",o.placeholder="2",(o=a.taboption("stream",form.Value,"ss_kcp_write_buffer_size","%s - %s".format("mKCP",_("Write buffer size")))).modalonly=!0,o.depends("ss_network","kcp"),o.datatype="uinteger",o.placeholder="2",(o=a.taboption("stream",form.ListValue,"ss_kcp_header_type","%s - %s".format("mKCP",_("Header type")))).modalonly=!0,o.depends("ss_network","kcp"),o.value(""),o.value("none",_("None")),o.value("srtp","SRTP"),o.value("utp","uTP"),o.value("wechat-video",_("Wechat Video")),o.value("dtls","DTLS 1.2"),o.value("wireguard","WireGuard"),(o=a.taboption("stream",form.Value,"ss_websocket_path","%s - %s".format("WebSocket",_("Path")))).modalonly=!0,o.depends("ss_network","ws"),(o=a.taboption("stream",form.DynamicList,"ss_websocket_headers","%s - %s".format("WebSocket",_("Headers")),_("A list of HTTP headers, format: <code>header=value</code>. eg: %s").format("Host=www.bing.com"))).modalonly=!0,o.depends("ss_network","ws"),(o=a.taboption("stream",form.DynamicList,"ss_http_host","%s - %s".format("HTTP/2",_("Host")))).modalonly=!0,o.depends("ss_network","http"),(o=a.taboption("stream",form.Value,"ss_http_path","%s - %s".format("HTTP/2",_("Path")))).modalonly=!0,o.depends("ss_network","http"),o.placeholder="/",(o=a.taboption("stream",form.Value,"ss_domainsocket_path","%s - %s".format("Domain Socket",_("Path")))).modalonly=!0,o.depends("ss_network","domainsocket"),(o=a.taboption("stream",form.ListValue,"ss_quic_security","%s - %s".format("QUIC",_("Security")))).modalonly=!0,o.depends("ss_network","quic"),o.value(""),o.value("none",_("None")),o.value("aes-128-gcm"),o.value("chacha20-poly1305"),(o=a.taboption("stream",form.Value,"ss_quic_key","%s - %s".format("QUIC",_("Key")))).modalonly=!0,o.depends("ss_quic_security","aes-128-gcm"),o.depends("ss_quic_security","chacha20-poly1305"),(o=a.taboption("stream",form.ListValue,"ss_quic_header_type","%s - %s".format("QUIC",_("Header type")))).modalonly=!0,o.depends("ss_network","quic"),o.value(""),o.value("none",_("None")),o.value("srtp","SRTP"),o.value("utp","uTP"),o.value("wechat-video",_("Wechat Video")),o.value("dtls","DTLS 1.2"),o.value("wireguard","WireGuard"),(o=a.taboption("stream",form.Value,"ss_sockopt_mark","%s - %s".format(_("Sockopt"),_("Mark")),_("If transparent proxy is enabled, this option is ignored and will be set to 255."))).modalonly=!0,o.placeholder="255",(o=a.taboption("stream",form.ListValue,"ss_sockopt_tcp_fast_open","%s - %s".format(_("Sockopt"),_("TCP fast open")))).modalonly=!0,o.value(""),o.value("0",_("False")),o.value("1",_("True")),o=a.taboption("general",form.Value,"tag",_("Tag")),(o=a.taboption("general",form.Value,"proxy_settings_tag","%s - %s".format(_("Proxy settings"),_("Tag")))).modalonly=!0,(o=a.taboption("other",form.Flag,"mux_enabled","%s - %s".format(_("Mux"),_("Enabled")))).modalonly=!0,(o=a.taboption("other",form.Value,"mux_concurrency","%s - %s".format(_("Mux"),_("Concurrency")))).modalonly=!0,o.datatype="uinteger",o.placeholder="8",s.render()}});