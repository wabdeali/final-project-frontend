var Jor1k = require("Jor1k");

var LinuxTerm = require("LinuxTerm");

var term = new LinuxTerm("tty");

var jor1kgui = new Jor1k({
  term: term,
  path: "https://s-macke.github.io/jor1k/riscv-sys/",
  statsid: "stats",
  relayURL: "wss://relay.widgetry.org/",
    system: {
      kernelURL: "kernel/bbl.bz2",
      dtbURL: "kernel/riscv.dtb",
      arch: "riscv",
      cpu: "safe",
      memorysize: 64,
    },
    fs: {
      basefsURL: "basefs.json",
      extendedfsURL: "fs.json"
    }
  }
);
jor1kgui.Pause(true);
function OnSelectChange(sel) {
	if (sel.value[0] == "c")
	{
    jor1kgui.Pause(true);
    return;
	}
	jor1kgui.params.system.kernelURL = jor1kgui.params.path + sel.value;
	jor1kgui.Reset();
	jor1kgui.Pause(false);
};
function OnNewImage(files) {
  var reader = new FileReader();
  reader.onload = function(e) {
    jor1kgui.message.Send("Reset");
    jor1kgui.message.Send("LoadAndStart", reader.result);
	  jor1kgui.Pause(false);
  }.bind(this);
  reader.readAsArrayBuffer(files[0]);
}



