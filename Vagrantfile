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

  config.vm.provision "ansible" do |a|
    a.playbook = "ansible/site.yml"
    a.inventory_path = "ansible/inventory.ini"
    a.host_key_checking = false
  end

  # Provisioning with Ansible
  if Vagrant::Util::Platform.windows?
    # Windows host: run Ansible inside the VM
    config.vm.provision "ansible_local" do |a|
      a.playbook = "ansible/site.yml"
      a.install_mode = "default"
    end
  else
    config.vm.provision "ansible" do |a|
      a.playbook = "ansible/site.yml"
      a.inventory_path = "ansible/inventory.ini"
      a.host_key_checking = false
    end
  end
end
