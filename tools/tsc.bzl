load("@npm//typescript:index.bzl", _tsc = "tsc")

def tsc(name, srcs, ts_config, deps, **kwargs):
    "A macro around the autogenerated tsc rule"
    outs = [f[:-3] + ".js" for f in srcs] + [f[:-3] + ".d.ts" for f in srcs]
    args = [
        "-p",
        "$(location %s)" % ts_config,
        "--rootDir",
        native.package_name(),
        "--outDir",
        # $(RULEDIR) is a shorthand for the dist/bin directory where Bazel requires we write outputs
        "$(RULEDIR)",
    ]
    data = srcs + [ts_config] + deps

    _tsc(
        name = name,
        outs = outs,
        args = args,
        data = data
    )