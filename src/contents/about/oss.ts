interface OSS {
  name: string;
  link: string;
  org: {
    name: string;
    link: string;
  };
  description: string;
  thumbnail: string;
  prs: [PR[], PR[]];
}

interface PR {
  id_links: { id: string; link: string }[];
  description: string;
  extra?: string;
}

export const data: OSS[] = [
  {
    name: "aya",
    link: "https://github.com/aya-rs/aya",
    org: {
      name: "aya-rs",
      link: "https://github.com/aya-rs",
    },
    description:
      "Rust library for building, loading, and attaching eBPF programs.",
    thumbnail: "aya.jpg",
    prs: [
      [
        {
          id_links: [
            { id: "PR#959", link: "https://github.com/aya-rs/aya/pull/959" },
          ],
          description:
            "Implemented `BPF_ENABLE_STATS` bpf syscall API for runtime statistics collection and benchmarking.",
          extra: undefined,
        },
        {
          id_links: [
            { id: "PR#1007", link: "https://github.com/aya-rs/aya/pull/1007" },
            { id: "PR#1021", link: "https://github.com/aya-rs/aya/pull/1021" },
          ],
          description:
            "Added field probing support for program and map info API in consideration for older kernels.",
          extra: undefined,
        },
      ],
      [
        {
          id_links: [
            { id: "PR#912", link: "https://github.com/aya-rs/aya/pull/912" },
          ],
          description:
            "Limit `KProbe` & `UProbe` access to args only, and created `KRetProbe` & `URetProbe` ctx with access to return value.",
          extra: undefined,
        },
        {
          id_links: [
            { id: "PR#917", link: "https://github.com/aya-rs/aya/pull/917" },
          ],
          description:
            "Fixed code-gen errors for Rust's FFI bindings to Linux UAPI in the build script and GHA workflow.",
          extra: undefined,
        },
        {
          id_links: [
            { id: "PR#963", link: "https://github.com/aya-rs/aya/pull/963" },
          ],
          description: "Fixed rustdoc build errors in v0.12.0 release.",
          extra: undefined,
        },
      ],
    ],
  },
  {
    name: "BPF Subsystem",
    link: "https://git.kernel.org/pub/scm/linux/kernel/git/bpf/bpf.git/",
    org: {
      name: "Linux Kernel",
      link: "https://git.kernel.org/",
    },
    description: "BPF subsystem of the Linux kernel.",
    thumbnail: "linux.png",
    prs: [
      [],
      [
        {
          id_links: [
            {
              id: "4deecd",
              link: "https://git.kernel.org/pub/scm/linux/kernel/git/bpf/bpf.git/commit/?id=4deecdd29cf2",
            },
            {
              id: "4538a3",
              link: "https://git.kernel.org/pub/scm/linux/kernel/git/bpf/bpf.git/commit/?id=4538a38f654a",
            },
          ],
          description:
            "Fixed unpopulated `name_len` field in `bpf_link_info.perf_event` for kprobe, uprobe, and tracepoint. Added relevant selftests to cover this scenario.",
          extra:
            "https://lore.kernel.org/bpf/20241011193252.178997-1-wudevelops@gmail.com/T/#u",
        },
        {
          id_links: [
            {
              id: "ad6b5b",
              link: "https://git.kernel.org/bpf/bpf/c/ad6b5b6ea9b7",
            },
            {
              id: "b836cb",
              link: "https://git.kernel.org/bpf/bpf/c/b836cbdf3b81",
            },
          ],
          description:
            "Fixed unpopulated `uprobe_multi.path_size` field in `bpf_link_info` when buffer and length are unset. Added relevant selftests to cover this scenario.",
          extra:
            "https://lore.kernel.org/bpf/CABVU1kWEHkt+z1c0vu1bXMn81iY8rDjwU=B6KPi2dPVvgeZUPw@mail.gmail.com/T/#u",
        },
        {
          id_links: [
            {
              id: "92f371",
              link: "https://git.kernel.org/bpf/bpf/c/92f3715e1eba",
            },
            {
              id: "2aa587",
              link: "https://git.kernel.org/bpf/bpf/c/2aa587fd6659",
            },
          ],
          description:
            "Correctly set `netfilter.flags` field in `bpf_link_info` when `BPF_F_NETFILTER_IP_DEFRAG` is specified in attachment. Added relevant selftests to cover this scenario.",
          extra:
            "https://lore.kernel.org/bpf/20241011193252.178997-1-wudevelops@gmail.com/T/#u",
        },
      ],
    ],
  },
  {
    name: "bpftop",
    link: "https://github.com/Netflix/bpftop",
    org: {
      name: "NetflixOSS",
      link: "https://github.com/Netflix",
    },
    description: "TUI for real-time view of eBPF programs running on the host.",
    thumbnail: "bpftop.png",
    prs: [
      [
        {
          id_links: [
            { id: "PR#22", link: "https://github.com/Netflix/bpftop/pull/22" },
          ],
          description:
            "Added search & filtering input based on program `Name` or `Type` in the table view.",
          extra: undefined,
        },
        {
          id_links: [
            { id: "PR#26", link: "https://github.com/Netflix/bpftop/pull/26" },
          ],
          description:
            "Added tabular sorting feature in the table view with column selection.",
          extra: undefined,
        },
      ],
      [],
    ],
  },
];
