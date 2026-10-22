Vagrant.configure("2") do |config|
  config.vm.box = "generic/ubuntu2204"
  config.vm.hostname = "garderie-vm"

  config.vm.network "private_network", ip: "192.168.56.10"
  config.vm.network "forwarded_port", guest: 3000, host: 3000, host_ip: "0.0.0.0"
  config.vm.network "forwarded_port", guest: 5000, host: 5000, host_ip: "0.0.0.0"

  config.vm.synced_folder ".", "/vagrant", type: "rsync",
    rsync__exclude: [".git/", ".vagrant/", "node_modules/", ".next/"]

  config.vm.provider "libvirt" do |lv|
    lv.memory = 2048
    lv.cpus   = 2
  end

  # Reliable DNS inside the VM
  config.vm.provision "shell", inline: <<-'SHELL'
    mkdir -p /etc/systemd/resolved.conf.d
    printf '[Resolve]\nDNS=8.8.8.8 1.1.1.1\nFallbackDNS=9.9.9.9\nDNSSEC=no\n' > /etc/systemd/resolved.conf.d/dns.conf
    systemctl restart systemd-resolved
  SHELL

  # Ansible runs inside the VM
  config.vm.provision "ansible_local" do |a|
    a.playbook = "ansible/site.yml"
    a.config_file = "ansible/ansible.cfg"
    a.install_mode = "default"
  end
end
