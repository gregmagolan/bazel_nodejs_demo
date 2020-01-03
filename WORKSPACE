workspace(
    name = "nodejs_demo",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "e1a0d6eb40ec89f61a13a028e7113aa3630247253bcb1406281b627e44395145",
    patch_args = ["-p1"],
    patches = ["//:rules_nodejs.patch"],
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/1.0.1/rules_nodejs-1.0.1.tar.gz"],
)

# local_repository(
#     name = "build_bazel_rules_nodejs_labs",
#     path = "../../google/rules_nodejs",
# )

http_archive(
    name = "build_bazel_rules_nodejs_labs",
    sha256 = "e688db5834111db7aed1ee620625048df614aca2529d8040179ed77de05d686e",
    urls = ["https://github.com/gregmagolan/rules_nodejs/archive/353f2a6f80140dfefd2a9b2125ea97ca705a20fa.zip"],
    strip_prefix = "rules_nodejs-353f2a6f80140dfefd2a9b2125ea97ca705a20fa",
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()