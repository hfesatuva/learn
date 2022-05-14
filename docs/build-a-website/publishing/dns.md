---
sidebar_position: 1
---

# Freenom DNS

## What is DNS

Domain Name System (DNS) is like a online phonebook for IP (Internet Protocol Addresses). In short, it lets you give a shorthand for where to access things you provide over the internet, no matter where you might move them. Wherever Google puts its servers, you can always find the search engine at [https://www.google.com:443](https://www.google.com:443). If you want to learn more about DNS, skip to the [Optional Postfix](#optional-postfix).

## Why Freenom?

In my experience trying to register any Apex domains (see [Domains and Subdomains](#domains-and-subdomains)), it is very hard to do so without providing payment informaiton, or pament upfront. Freenom allows use of certain domains for one year without any payment or payment info. You can see their price chart for free and paid domains [here](https://www.freenom.com/en/pricechart.html). The free TLDs include ```.tk```, ```.ml```, ```.cf```, ```.gq```, and my personal favorite: ```.ga```. Some of their cheapest paid domains include ```.eu```, ```.net```, ```.work```. I have not yet attempted a renewal on Freenom, so it may be difficult to renew for free, but at the least, you can get a full year for free.

## Setup

The website is a little bit glitchy, but setup is fast. You can even register a domain with an alias identity to protect your privacy. Note that this may make it difficult to claim ownership of the domain legally, but for most people this should not matter. You can see how to sign up for Freenom and GitHub in the video below. You will also see how to make the DNS records that you will need to direct to a GitHub pages site with the name docs.workshop.ga. 

### Video Walkthrough

<div class="video-container">
    <iframe class="video" src="https://www.youtube.com/embed/smpT0CxXHOE" allowfullscreen=""></iframe>
</div>

### Text Walkthrough

1. Choose an email address, physical address, and name to use.
2. Sign up for a Freenom account. You can use Google authentication if you choose.
3. Sign up for a GitHub account.
4. Add DNS "A" (address) records that point from your Apex domain to GitHub's servers. 
5. I believe best practce is also to add "AAAA" records to point to the IPv6 addresses of GitHub's servers- there are complicated reasons for this which you can begin to understand [here](https://www.expressvpn.com/blog/run-out-of-ip-address-exhaustion/).
6. Make a DNS "CNAME" (canonical name) record that points to (your-github-username).github.io

## Optional Postfix

### IP Addresses and DNS
IP addresses either version 4 (IPv4) or version 6 (IPv6), are numbers that computers use to call eachother, so that they can communicate. When you go to a website, like [google.com](https://www.google.com), a DNS "nameserver" (a phonebook) is changing translating ```google.com``` into a number like [142.250.81.206](https://142.250.81.206). You can use a tool like [MX Toolbox](https://mxtoolbox.com/) to look up DNS records. There are often many for one domain name that do different things. 

### Domains and Subdomains
Domains can have arbitrarily many sub domains. Domains are more specific on the left and more broad on the right. Consider the domain ```docs.google.com```. The last part, the ```com``` is called the top level domain. You are probably familiar with others such as ```net``` and ```org```. There are all kinds of others like ```site```, ```io```, and various country specific designations like ```us```, ```cn```, or ```ga```. The second to the left, the ```google``` is the apex domain. That is the part you have to reserve from a domain registrar, and usually pay for rights to use. The rest of the domains to the left of the apex domains are then yours that you are free to designate as you wish. This site is ```learn.hfes.atuva.ga```. The following would also be a valid domain: ```morning.monday.racecarteam.atuva.ga```. When you see ```http://``` or ```https://```, that is designating that you want to use the HyperText Transfer Protocol with or without encryption Security. This is usually the implied protocol for web browsing, but others exist. For example the web socket protocol (```ws://```) is used for things like video conferencing "under the hood".

:::note
Apex domains are much harder to secure than subdomains. Many website building tools like Wix, Weebly, or even GitHub will give you a subdomain under their Apex domain. However, you are then stuck with a name like ```yoursite.weebly.com```. Personally, I would rather have ```yoursite.ga```, even if I can't have ```yoursite.com```.
:::

### WWW and Ports
If you are wondering about the ```www``` prefix, that is actually also a subdomain. TYou can read about the purpose for it [here](https://stackoverflow.com/questions/35350663/why-was-www-ever-prefixed-to-websites-purpose-of-www-prefix). Note that you don't need to use this prefix if you don't want to. Further, there is actually more to a domain you may not have seen: the port number. The default for ```http``` is 80 and for ```https``` is 443, so those are implied. If you want to test this, go to [https://www.google.com:443](https://www.google.com:443) and [https://www.google.com:441](https://www.google.com:441). The second one won't work, but the first will!

