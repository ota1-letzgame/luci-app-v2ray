"use strict";"require form";"require v2ray";"require view/v2ray/include/custom as custom";return L.view.extend({load:function(){return Promise.all([v2ray.fileExist("/lib/libustream-ssl.so")])},render:function(e){var t,r=e[0],o=void 0!==r&&r,i=new form.Map("v2ray","%s - %s".format(_("V2Ray"),_("Transparent Proxy"))),a=i.section(form.NamedSection,"main_transparent_proxy","transparent_proxy");return(t=a.option(form.Value,"redirect_port",_("Redirect port"),_("Enable transparent proxy on Dokodemo-door port."))).value("",_("None")),t.datatype="port",t=a.option(form.MultiValue,"lan_ifaces",_("LAN interfaces"),_("Enable proxy on selected interfaces.")),t=a.option(form.Flag,"use_tproxy",_("Use TProxy"),_("Setup redirect rules with TProxy.")),t=a.option(form.Flag,"only_privileged_ports",_("Only privileged ports"),_("Only redirect traffic on ports below 1024.")),t=a.option(form.Flag,"redirect_udp",_("Redirect UDP"),_("Redirect UDP traffic to V2Ray.")),(t=a.option(form.Flag,"redirect_dns",_("Redirect DNS"),_("Redirect DNS traffic to V2Ray."))).depends("redirect_udp",""),t.depends("redirect_udp","0"),(t=a.option(form.ListValue,"proxy_mode",_("Proxy mode"),_("If enabled, iptables rules will be added to pre-filter traffic and then sent to V2Ray."))).value("default",_("Default")),t.value("cn_direct",_("CN Direct")),t.value("cn_proxy",_("CN Proxy")),t.value("gfwlist_proxy",_("GFWList Proxy")),(t=a.option(form.ListValue,"apnic_delegated_mirror",_("APNIC delegated mirror"))).value("apnic","APNIC"),t.value("arin","ARIN"),t.value("ripe","RIPE"),t.value("iana","IANA"),(t=a.option(form.DummyValue,"_chnroutelist",_("CHNRoute"),ssl_note)).template="v2ray/list_status",t.listtype="chnroute",t.updatebtn=o,(t=a.option(form.ListValue,"gfwlist_mirror",_("GFWList mirror"))).value("github","GitHub"),t.value("gitlab","GitLab"),t.value("bitbucket","Bitbucket"),t.value("pagure","Pagure"),(t=a.option(form.DummyValue,"_gfwlist",_("GFWList"),ssl_note)).template="v2ray/list_status",t.listtype="gfwlist",t.updatebtn=o,(t=a.option(custom.TextValue,"_proxy_list",_("Extra proxy list"),_("One address per line. Allow types: DOMAIN, IP, CIDR. eg: %s, %s, %s").format("www.google.com","1.1.1.1","192.168.0.0/16"))).wrap="off",t.rows=5,t.datatype="string",t.filepath="/etc/v2ray/proxylist.txt",(t=a.option(custom.TextValue,"_direct_list",_("Extra direct list"),_("One address per line. Allow types: DOMAIN, IP, CIDR. eg: %s, %s, %s").format("www.google.com","1.1.1.1","192.168.0.0/16"))).wrap="off",t.rows=5,t.datatype="string",t.filepath="/etc/v2ray/directlist.txt",t=a.option(form.Value,"proxy_list_dns",_("Proxy list DNS"),_("DNS used for domains in proxy list, format: <code>ip#port</code>. eg: %s").format("1.1.1.1#53")),t=a.option(form.Value,"direct_list_dns",_("Direct list DNS"),_("DNS used for domains in direct list, format: <code>ip#port</code>. eg: %s").format("114.114.114.114#53")),(t=a.option(custom.TextValue,"_src_direct_list",_("Local devices direct outbound list"),_("One address per line. Allow types: IP, CIDR. eg: %s, %s").format("192.168.0.19","192.168.0.0/16"))).wrap="off",t.rows=3,t.datatype="string",t.filepath="/etc/v2ray/srcdirectlist.txt",i.render()}});