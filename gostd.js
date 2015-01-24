var gostd = {
    "archive/tar": [
        "bytes",
        "errors",
        "fmt",
        "io",
        "io/ioutil",
        "os",
        "path",
        "strconv",
        "strings",
        "syscall",
        "time"
    ],
    "archive/zip": [
        "bufio",
        "compress/flate",
        "encoding/binary",
        "errors",
        "hash",
        "hash/crc32",
        "io",
        "io/ioutil",
        "os",
        "path",
        "sync",
        "time"
    ],
    "bufio": [
        "bytes",
        "errors",
        "io",
        "unicode/utf8"
    ],
    "bytes": [
        "errors",
        "io",
        "unicode",
        "unicode/utf8"
    ],
    "compress/bzip2": [
        "bufio",
        "io",
        "sort"
    ],
    "compress/flate": [
        "bufio",
        "fmt",
        "io",
        "math",
        "sort",
        "strconv"
    ],
    "compress/gzip": [
        "bufio",
        "compress/flate",
        "errors",
        "fmt",
        "hash",
        "hash/crc32",
        "io",
        "time"
    ],
    "compress/lzw": [
        "bufio",
        "errors",
        "fmt",
        "io"
    ],
    "compress/zlib": [
        "bufio",
        "compress/flate",
        "errors",
        "fmt",
        "hash",
        "hash/adler32",
        "io"
    ],
    "container/heap": [
        "sort"
    ],
    "container/list": [],
    "container/ring": [],
    "crypto": [
        "hash",
        "io",
        "strconv"
    ],
    "crypto/aes": [
        "crypto/cipher",
        "strconv"
    ],
    "crypto/cipher": [
        "crypto/subtle",
        "errors",
        "io",
        "runtime"
    ],
    "crypto/des": [
        "crypto/cipher",
        "encoding/binary",
        "strconv"
    ],
    "crypto/dsa": [
        "errors",
        "io",
        "math/big"
    ],
    "crypto/ecdsa": [
        "crypto",
        "crypto/elliptic",
        "encoding/asn1",
        "io",
        "math/big"
    ],
    "crypto/elliptic": [
        "io",
        "math/big",
        "sync"
    ],
    "crypto/hmac": [
        "crypto/subtle",
        "hash"
    ],
    "crypto/md5": [
        "crypto",
        "hash",
        "runtime"
    ],
    "crypto/rand": [
        "bufio",
        "crypto/aes",
        "crypto/cipher",
        "errors",
        "internal/syscall",
        "io",
        "math/big",
        "os",
        "runtime",
        "sync",
        "time"
    ],
    "crypto/rc4": [
        "strconv"
    ],
    "crypto/rsa": [
        "bytes",
        "crypto",
        "crypto/rand",
        "crypto/subtle",
        "errors",
        "hash",
        "io",
        "math/big"
    ],
    "crypto/sha1": [
        "crypto",
        "hash"
    ],
    "crypto/sha256": [
        "crypto",
        "hash"
    ],
    "crypto/sha512": [
        "crypto",
        "hash"
    ],
    "crypto/subtle": [],
    "crypto/tls": [
        "bytes",
        "container/list",
        "crypto",
        "crypto/aes",
        "crypto/cipher",
        "crypto/des",
        "crypto/ecdsa",
        "crypto/elliptic",
        "crypto/hmac",
        "crypto/md5",
        "crypto/rand",
        "crypto/rc4",
        "crypto/rsa",
        "crypto/sha1",
        "crypto/sha256",
        "crypto/subtle",
        "crypto/x509",
        "encoding/asn1",
        "encoding/pem",
        "errors",
        "fmt",
        "hash",
        "io",
        "io/ioutil",
        "math/big",
        "net",
        "strconv",
        "strings",
        "sync",
        "time"
    ],
    "crypto/x509": [
        "bytes",
        "crypto",
        "crypto/aes",
        "crypto/cipher",
        "crypto/des",
        "crypto/dsa",
        "crypto/ecdsa",
        "crypto/elliptic",
        "crypto/md5",
        "crypto/rsa",
        "crypto/sha1",
        "crypto/sha256",
        "crypto/sha512",
        "crypto/x509/pkix",
        "encoding/asn1",
        "encoding/hex",
        "encoding/pem",
        "errors",
        "fmt",
        "io",
        "io/ioutil",
        "math/big",
        "net",
        "runtime",
        "strconv",
        "strings",
        "sync",
        "time",
        "unicode/utf8"
    ],
    "crypto/x509/pkix": [
        "encoding/asn1",
        "math/big",
        "time"
    ],
    "database/sql": [
        "database/sql/driver",
        "errors",
        "fmt",
        "io",
        "reflect",
        "runtime",
        "sort",
        "strconv",
        "sync"
    ],
    "database/sql/driver": [
        "errors",
        "fmt",
        "reflect",
        "strconv",
        "time"
    ],
    "debug/dwarf": [
        "encoding/binary",
        "errors",
        "fmt",
        "strconv"
    ],
    "debug/elf": [
        "bytes",
        "debug/dwarf",
        "encoding/binary",
        "errors",
        "fmt",
        "io",
        "os",
        "strconv"
    ],
    "debug/gosym": [
        "bytes",
        "encoding/binary",
        "fmt",
        "strconv",
        "strings",
        "sync"
    ],
    "debug/macho": [
        "bytes",
        "debug/dwarf",
        "encoding/binary",
        "fmt",
        "io",
        "os",
        "strconv"
    ],
    "debug/pe": [
        "debug/dwarf",
        "encoding/binary",
        "errors",
        "fmt",
        "io",
        "os",
        "strconv"
    ],
    "debug/plan9obj": [
        "encoding/binary",
        "errors",
        "fmt",
        "io",
        "os"
    ],
    "encoding": [],
    "encoding/ascii85": [
        "io",
        "strconv"
    ],
    "encoding/asn1": [
        "bytes",
        "errors",
        "fmt",
        "io",
        "math/big",
        "reflect",
        "strconv",
        "strings",
        "time",
        "unicode/utf8"
    ],
    "encoding/base32": [
        "bytes",
        "io",
        "strconv",
        "strings"
    ],
    "encoding/base64": [
        "bytes",
        "io",
        "strconv",
        "strings"
    ],
    "encoding/binary": [
        "errors",
        "io",
        "math",
        "reflect"
    ],
    "encoding/csv": [
        "bufio",
        "bytes",
        "errors",
        "fmt",
        "io",
        "strings",
        "unicode",
        "unicode/utf8"
    ],
    "encoding/gob": [
        "bufio",
        "encoding",
        "errors",
        "fmt",
        "io",
        "math",
        "os",
        "reflect",
        "sync",
        "sync/atomic",
        "unicode",
        "unicode/utf8"
    ],
    "encoding/hex": [
        "bytes",
        "errors",
        "fmt",
        "io"
    ],
    "encoding/json": [
        "bytes",
        "encoding",
        "encoding/base64",
        "errors",
        "fmt",
        "io",
        "math",
        "reflect",
        "runtime",
        "sort",
        "strconv",
        "strings",
        "sync",
        "unicode",
        "unicode/utf16",
        "unicode/utf8"
    ],
    "encoding/pem": [
        "bytes",
        "encoding/base64",
        "io",
        "sort"
    ],
    "encoding/xml": [
        "bufio",
        "bytes",
        "encoding",
        "errors",
        "fmt",
        "io",
        "reflect",
        "strconv",
        "strings",
        "sync",
        "unicode",
        "unicode/utf8"
    ],
    "errors": [],
    "expvar": [
        "bytes",
        "encoding/json",
        "fmt",
        "log",
        "net/http",
        "os",
        "runtime",
        "sort",
        "strconv",
        "sync"
    ],
    "flag": [
        "errors",
        "fmt",
        "io",
        "os",
        "sort",
        "strconv",
        "time"
    ],
    "fmt": [
        "errors",
        "io",
        "math",
        "os",
        "reflect",
        "strconv",
        "sync",
        "unicode/utf8"
    ],
    "go/ast": [
        "bytes",
        "fmt",
        "go/scanner",
        "go/token",
        "io",
        "os",
        "reflect",
        "sort",
        "strconv",
        "strings",
        "unicode",
        "unicode/utf8"
    ],
    "go/build": [
        "bufio",
        "bytes",
        "errors",
        "fmt",
        "go/ast",
        "go/doc",
        "go/parser",
        "go/token",
        "io",
        "io/ioutil",
        "log",
        "os",
        "path",
        "path/filepath",
        "runtime",
        "sort",
        "strconv",
        "strings",
        "unicode",
        "unicode/utf8"
    ],
    "go/doc": [
        "go/ast",
        "go/token",
        "io",
        "path",
        "regexp",
        "sort",
        "strconv",
        "strings",
        "text/template",
        "unicode",
        "unicode/utf8"
    ],
    "go/format": [
        "bytes",
        "fmt",
        "go/ast",
        "go/parser",
        "go/printer",
        "go/token",
        "io",
        "strings"
    ],
    "go/parser": [
        "bytes",
        "errors",
        "fmt",
        "go/ast",
        "go/scanner",
        "go/token",
        "io",
        "io/ioutil",
        "os",
        "path/filepath",
        "strconv",
        "strings",
        "unicode"
    ],
    "go/printer": [
        "bytes",
        "fmt",
        "go/ast",
        "go/token",
        "io",
        "os",
        "strconv",
        "strings",
        "text/tabwriter",
        "unicode",
        "unicode/utf8"
    ],
    "go/scanner": [
        "bytes",
        "fmt",
        "go/token",
        "io",
        "path/filepath",
        "sort",
        "strconv",
        "unicode",
        "unicode/utf8"
    ],
    "go/token": [
        "fmt",
        "sort",
        "strconv",
        "sync"
    ],
    "hash": [
        "io"
    ],
    "hash/adler32": [
        "hash"
    ],
    "hash/crc32": [
        "hash",
        "sync"
    ],
    "hash/crc64": [
        "hash"
    ],
    "hash/fnv": [
        "hash"
    ],
    "html": [
        "bytes",
        "strings",
        "unicode/utf8"
    ],
    "html/template": [
        "bytes",
        "encoding/json",
        "fmt",
        "html",
        "io",
        "io/ioutil",
        "path/filepath",
        "reflect",
        "strings",
        "sync",
        "text/template",
        "text/template/parse",
        "unicode",
        "unicode/utf8"
    ],
    "image": [
        "bufio",
        "errors",
        "image/color",
        "io",
        "strconv"
    ],
    "image/color": [],
    "image/color/palette": [
        "image/color"
    ],
    "image/draw": [
        "image",
        "image/color"
    ],
    "image/gif": [
        "bufio",
        "compress/lzw",
        "errors",
        "fmt",
        "image",
        "image/color",
        "image/color/palette",
        "image/draw",
        "io"
    ],
    "image/jpeg": [
        "bufio",
        "errors",
        "image",
        "image/color",
        "io"
    ],
    "image/png": [
        "bufio",
        "compress/zlib",
        "encoding/binary",
        "fmt",
        "hash",
        "hash/crc32",
        "image",
        "image/color",
        "io",
        "strconv"
    ],
    "index/suffixarray": [
        "bytes",
        "encoding/binary",
        "io",
        "regexp",
        "sort"
    ],
    "internal/syscall": [
        "runtime",
        "sync/atomic",
        "syscall"
    ],
    "io": [
        "errors",
        "sync"
    ],
    "io/ioutil": [
        "bytes",
        "io",
        "os",
        "path/filepath",
        "sort",
        "strconv",
        "sync",
        "time"
    ],
    "log": [
        "fmt",
        "io",
        "os",
        "runtime",
        "sync",
        "time"
    ],
    "log/syslog": [
        "errors",
        "fmt",
        "log",
        "net",
        "os",
        "strings",
        "sync",
        "time"
    ],
    "math": [],
    "math/big": [
        "encoding/binary",
        "errors",
        "fmt",
        "io",
        "math",
        "math/rand",
        "strings",
        "sync"
    ],
    "math/cmplx": [
        "math"
    ],
    "math/rand": [
        "math",
        "sync"
    ],
    "mime": [
        "bufio",
        "bytes",
        "errors",
        "fmt",
        "os",
        "sort",
        "strings",
        "sync",
        "unicode"
    ],
    "mime/multipart": [
        "bufio",
        "bytes",
        "crypto/rand",
        "errors",
        "fmt",
        "io",
        "io/ioutil",
        "mime",
        "net/textproto",
        "os",
        "strings"
    ],
    "net": [
        "errors",
        "io",
        "math/rand",
        "os",
        "runtime",
        "sort",
        "sync",
        "sync/atomic",
        "syscall",
        "time"
    ],
    "net/http": [
        "bufio",
        "bytes",
        "compress/gzip",
        "crypto/tls",
        "encoding/base64",
        "encoding/binary",
        "errors",
        "fmt",
        "io",
        "io/ioutil",
        "log",
        "mime",
        "mime/multipart",
        "net",
        "net/http/internal",
        "net/textproto",
        "net/url",
        "os",
        "path",
        "path/filepath",
        "runtime",
        "sort",
        "strconv",
        "strings",
        "sync",
        "sync/atomic",
        "time"
    ],
    "net/http/cgi": [
        "bufio",
        "crypto/tls",
        "errors",
        "fmt",
        "io",
        "io/ioutil",
        "log",
        "net",
        "net/http",
        "net/url",
        "os",
        "os/exec",
        "path/filepath",
        "regexp",
        "runtime",
        "strconv",
        "strings"
    ],
    "net/http/cookiejar": [
        "errors",
        "fmt",
        "net",
        "net/http",
        "net/url",
        "sort",
        "strings",
        "sync",
        "time",
        "unicode/utf8"
    ],
    "net/http/fcgi": [
        "bufio",
        "bytes",
        "encoding/binary",
        "errors",
        "fmt",
        "io",
        "io/ioutil",
        "net",
        "net/http",
        "net/http/cgi",
        "os",
        "strings",
        "sync",
        "time"
    ],
    "net/http/httptest": [
        "bytes",
        "crypto/tls",
        "flag",
        "fmt",
        "net",
        "net/http",
        "os",
        "sync"
    ],
    "net/http/httputil": [
        "bufio",
        "bytes",
        "errors",
        "fmt",
        "io",
        "io/ioutil",
        "log",
        "net",
        "net/http",
        "net/http/internal",
        "net/textproto",
        "net/url",
        "strings",
        "sync",
        "time"
    ],
    "net/http/internal": [
        "bufio",
        "bytes",
        "errors",
        "fmt",
        "io"
    ],
    "net/http/pprof": [
        "bufio",
        "bytes",
        "fmt",
        "html/template",
        "io",
        "log",
        "net/http",
        "os",
        "runtime",
        "runtime/pprof",
        "strconv",
        "strings",
        "time"
    ],
    "net/mail": [
        "bufio",
        "bytes",
        "encoding/base64",
        "errors",
        "fmt",
        "io",
        "io/ioutil",
        "log",
        "net/textproto",
        "strconv",
        "strings",
        "time",
        "unicode"
    ],
    "net/rpc": [
        "bufio",
        "encoding/gob",
        "errors",
        "fmt",
        "html/template",
        "io",
        "log",
        "net",
        "net/http",
        "reflect",
        "sort",
        "strings",
        "sync",
        "unicode",
        "unicode/utf8"
    ],
    "net/rpc/jsonrpc": [
        "encoding/json",
        "errors",
        "fmt",
        "io",
        "net",
        "net/rpc",
        "sync"
    ],
    "net/smtp": [
        "crypto/hmac",
        "crypto/md5",
        "crypto/tls",
        "encoding/base64",
        "errors",
        "fmt",
        "io",
        "net",
        "net/textproto",
        "strings"
    ],
    "net/textproto": [
        "bufio",
        "bytes",
        "fmt",
        "io",
        "io/ioutil",
        "net",
        "strconv",
        "strings",
        "sync"
    ],
    "net/url": [
        "bytes",
        "errors",
        "sort",
        "strconv",
        "strings"
    ],
    "os": [
        "errors",
        "io",
        "runtime",
        "sync",
        "sync/atomic",
        "syscall",
        "time"
    ],
    "os/exec": [
        "bytes",
        "errors",
        "io",
        "os",
        "path/filepath",
        "runtime",
        "strconv",
        "strings",
        "sync",
        "syscall"
    ],
    "os/signal": [
        "os",
        "sync",
        "syscall"
    ],
    "os/user": [
        "fmt",
        "runtime",
        "strconv"
    ],
    "path": [
        "errors",
        "strings",
        "unicode/utf8"
    ],
    "path/filepath": [
        "bytes",
        "errors",
        "os",
        "runtime",
        "sort",
        "strings",
        "unicode/utf8"
    ],
    "reflect": [
        "math",
        "runtime",
        "strconv",
        "sync"
    ],
    "regexp": [
        "bytes",
        "io",
        "regexp/syntax",
        "sort",
        "strconv",
        "strings",
        "sync",
        "unicode",
        "unicode/utf8"
    ],
    "regexp/syntax": [
        "bytes",
        "sort",
        "strconv",
        "strings",
        "unicode",
        "unicode/utf8"
    ],
    "runtime": [],
    "runtime/debug": [
        "bytes",
        "fmt",
        "io/ioutil",
        "os",
        "runtime",
        "sort",
        "time"
    ],
    "runtime/pprof": [
        "bufio",
        "bytes",
        "fmt",
        "io",
        "runtime",
        "sort",
        "strings",
        "sync",
        "text/tabwriter"
    ],
    "runtime/race": [],
    "sort": [],
    "strconv": [
        "errors",
        "math",
        "unicode/utf8"
    ],
    "strings": [
        "errors",
        "io",
        "unicode",
        "unicode/utf8"
    ],
    "sync": [
        "runtime",
        "sync/atomic"
    ],
    "sync/atomic": [],
    "syscall": [
        "runtime",
        "sync"
    ],
    "testing": [
        "bytes",
        "flag",
        "fmt",
        "io",
        "os",
        "runtime",
        "runtime/pprof",
        "strconv",
        "strings",
        "sync",
        "sync/atomic",
        "time"
    ],
    "testing/iotest": [
        "errors",
        "io",
        "log"
    ],
    "testing/quick": [
        "flag",
        "fmt",
        "math",
        "math/rand",
        "reflect",
        "strings"
    ],
    "text/scanner": [
        "bytes",
        "fmt",
        "io",
        "os",
        "unicode",
        "unicode/utf8"
    ],
    "text/tabwriter": [
        "bytes",
        "io",
        "unicode/utf8"
    ],
    "text/template": [
        "bytes",
        "errors",
        "fmt",
        "io",
        "io/ioutil",
        "net/url",
        "path/filepath",
        "reflect",
        "runtime",
        "sort",
        "strings",
        "text/template/parse",
        "unicode",
        "unicode/utf8"
    ],
    "text/template/parse": [
        "bytes",
        "fmt",
        "runtime",
        "strconv",
        "strings",
        "unicode",
        "unicode/utf8"
    ],
    "time": [
        "errors",
        "runtime",
        "sync",
        "syscall"
    ],
    "unicode": [],
    "unicode/utf16": [],
    "unicode/utf8": []
};
