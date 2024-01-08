"use strict";(self.webpackChunkdoc_besu=self.webpackChunkdoc_besu||[]).push([[12228],{2278:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>p});var r=o(85893),n=o(11151);const i={title:"Upgrade",description:"Upgrading protocol versions",sidebar_position:8,tags:["private networks"]},s="Network and protocol upgrades",a={id:"private-networks/how-to/upgrade",title:"Upgrade",description:"Upgrading protocol versions",source:"@site/versioned_docs/version-23.7.3/private-networks/how-to/upgrade.md",sourceDirName:"private-networks/how-to",slug:"/private-networks/how-to/upgrade",permalink:"/23.7.3/private-networks/how-to/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/hyperledger/besu-docs/tree/main/versioned_docs/version-23.7.3/private-networks/how-to/upgrade.md",tags:[{label:"private networks",permalink:"/23.7.3/tags/private-networks"}],version:"23.7.3",lastUpdatedAt:1704675026,formattedLastUpdatedAt:"Jan 8, 2024",sidebarPosition:8,frontMatter:{title:"Upgrade",description:"Upgrading protocol versions",sidebar_position:8,tags:["private networks"]},sidebar:"privateDocSidebar",previous:{title:"Backup and restore",permalink:"/23.7.3/private-networks/how-to/backup"},next:{title:"Concepts",permalink:"/23.7.3/private-networks/concepts/"}},d={},p=[{value:"Upgrade the protocol",id:"upgrade-the-protocol",level:2}];function c(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"network-and-protocol-upgrades",children:"Network and protocol upgrades"}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Node upgrades upgrade your Besu client to a later version. In private networks, you can ",(0,r.jsx)(t.a,{href:"/23.7.3/public-networks/how-to/upgrade-node",children:"upgrade your node"})," as in public networks."]})}),"\n",(0,r.jsx)(t.p,{children:"Network upgrades are the mechanism for upgrading the Ethereum protocol. Protocol upgrades occur during the network upgrades."}),"\n",(0,r.jsx)(t.p,{children:"For Ethereum Mainnet and public testnets, the milestone block definitions are included in Besu. Upgrading your Besu client applies the network upgrade."}),"\n",(0,r.jsx)(t.p,{children:"For private networks, all network participants must agree on the protocol upgrades and coordinate the network upgrades. The genesis file specifies the milestone block at which to apply the protocol upgrade."}),"\n",(0,r.jsx)(t.h2,{id:"upgrade-the-protocol",children:"Upgrade the protocol"}),"\n",(0,r.jsx)(t.p,{children:"To upgrade the protocol in a private network:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Review included EIPs for breaking changes. A ",(0,r.jsx)(t.a,{href:"https://eips.ethereum.org/meta",children:"meta EIP"})," for each protocol upgrade lists included EIPs. For example, ",(0,r.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1679",children:"Istanbul"}),"."]}),"\n",(0,r.jsx)(t.li,{children:"Network participants agree on the block number at which to upgrade."}),"\n",(0,r.jsxs)(t.li,{children:["For each node in the network:","\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["Add the ",(0,r.jsx)(t.a,{href:"/23.7.3/public-networks/reference/genesis-items#milestone-blocks",children:"milestone block number"})," to the genesis file."]}),"\n",(0,r.jsx)(t.li,{children:"Restart the node before reaching milestone block."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{type:"caution",children:(0,r.jsx)(t.p,{children:"To avoid a forked network, all network participants must update their genesis file to include the agreed on milestone block and restart their node before reaching the milestone block."})}),"\n",(0,r.jsx)(t.admonition,{type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"For compatibility with future protocol upgrades, don't hardcode any gas price assumptions."}),"\n",(0,r.jsx)(t.li,{children:"Implementing upgradeable contracts enables contracts to be upgraded if a protocol upgrade does include breaking changes."}),"\n"]})})]})}function l(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,t,o)=>{o.d(t,{Z:()=>a,a:()=>s});var r=o(67294);const n={},i=r.createContext(n);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);