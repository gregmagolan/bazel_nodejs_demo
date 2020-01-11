workspace(
    name = "nodejs_demo",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "3c724acfa823f9d8f5247c4017b0afcaa5422a0497c0e5d82172f9cb0767ebd1",
    urls = ["https://github.com/gregmagolan/rules_nodejs-builds/raw/1.1.0+0ea06008/build_bazel_rules_nodejs-labs-snapshot.tar.gz"],
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@npm//:install_bazel_dependencies.bzl", "install_bazel_dependencies")

install_bazel_dependencies()