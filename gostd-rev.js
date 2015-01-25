var gostd = {
    "archive/tar": {
        "x": 0,
        "y": 20,
        "ins": [],
        "outs": [
            "fmt",
            "io/ioutil",
            "path"
        ]
    },
    "archive/zip": {
        "x": 0,
        "y": 13,
        "ins": [],
        "outs": [
            "compress/flate",
            "encoding/binary",
            "hash/crc32",
            "io/ioutil",
            "path"
        ]
    },
    "bufio": {
        "x": 7,
        "y": 3,
        "ins": [
            "compress/bzip2",
            "compress/flate",
            "compress/lzw",
            "crypto/rand",
            "encoding/csv",
            "encoding/gob",
            "encoding/xml",
            "go/build",
            "image",
            "mime",
            "net/http/internal",
            "net/textproto",
            "runtime/pprof"
        ],
        "outs": [
            "bytes"
        ]
    },
    "bytes": {
        "x": 8,
        "y": 5,
        "ins": [
            "bufio",
            "debug/elf",
            "debug/gosym",
            "debug/macho",
            "encoding/asn1",
            "encoding/base32",
            "encoding/base64",
            "encoding/hex",
            "html",
            "net/url",
            "path/filepath",
            "regexp/syntax",
            "text/scanner",
            "text/tabwriter",
            "text/template/parse"
        ],
        "outs": [
            "io",
            "unicode",
            "unicode/utf8"
        ]
    },
    "compress/bzip2": {
        "x": 0,
        "y": 11,
        "ins": [],
        "outs": [
            "bufio",
            "sort"
        ]
    },
    "compress/flate": {
        "x": 4,
        "y": 6,
        "ins": [
            "archive/zip",
            "compress/gzip",
            "compress/zlib"
        ],
        "outs": [
            "bufio",
            "fmt",
            "sort"
        ]
    },
    "compress/gzip": {
        "x": 3,
        "y": 5,
        "ins": [
            "net/http"
        ],
        "outs": [
            "compress/flate",
            "hash/crc32"
        ]
    },
    "compress/lzw": {
        "x": 1,
        "y": 5,
        "ins": [
            "image/gif"
        ],
        "outs": [
            "bufio",
            "fmt"
        ]
    },
    "compress/zlib": {
        "x": 1,
        "y": 1,
        "ins": [
            "image/png"
        ],
        "outs": [
            "compress/flate",
            "hash/adler32"
        ]
    },
    "container/heap": {
        "x": 0,
        "y": 8,
        "ins": [],
        "outs": [
            "sort"
        ]
    },
    "container/list": {
        "x": 4,
        "y": 0,
        "ins": [
            "crypto/tls"
        ],
        "outs": []
    },
    "container/ring": {
        "x": 0,
        "y": 3,
        "ins": [],
        "outs": []
    },
    "crypto": {
        "x": 6,
        "y": 4,
        "ins": [
            "crypto/ecdsa",
            "crypto/md5",
            "crypto/rsa",
            "crypto/sha1",
            "crypto/sha256",
            "crypto/sha512"
        ],
        "outs": [
            "hash",
            "strconv"
        ]
    },
    "crypto/aes": {
        "x": 7,
        "y": 0,
        "ins": [
            "crypto/rand"
        ],
        "outs": [
            "crypto/cipher",
            "strconv"
        ]
    },
    "crypto/cipher": {
        "x": 8,
        "y": 0,
        "ins": [
            "crypto/aes",
            "crypto/des"
        ],
        "outs": [
            "crypto/subtle",
            "io"
        ]
    },
    "crypto/des": {
        "x": 5,
        "y": 1,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "crypto/cipher",
            "encoding/binary"
        ]
    },
    "crypto/dsa": {
        "x": 5,
        "y": 6,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "math/big"
        ]
    },
    "crypto/ecdsa": {
        "x": 5,
        "y": 0,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "crypto",
            "crypto/elliptic",
            "encoding/asn1"
        ]
    },
    "crypto/elliptic": {
        "x": 6,
        "y": 0,
        "ins": [
            "crypto/ecdsa"
        ],
        "outs": [
            "math/big"
        ]
    },
    "crypto/hmac": {
        "x": 4,
        "y": 3,
        "ins": [
            "crypto/tls"
        ],
        "outs": [
            "crypto/subtle",
            "hash"
        ]
    },
    "crypto/md5": {
        "x": 5,
        "y": 5,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "crypto"
        ]
    },
    "crypto/rand": {
        "x": 6,
        "y": 3,
        "ins": [
            "crypto/rsa",
            "mime/multipart"
        ],
        "outs": [
            "bufio",
            "crypto/aes",
            "internal/syscall",
            "math/big"
        ]
    },
    "crypto/rc4": {
        "x": 4,
        "y": 1,
        "ins": [
            "crypto/tls"
        ],
        "outs": [
            "strconv"
        ]
    },
    "crypto/rsa": {
        "x": 5,
        "y": 9,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "crypto",
            "crypto/rand"
        ]
    },
    "crypto/sha1": {
        "x": 5,
        "y": 4,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "crypto"
        ]
    },
    "crypto/sha256": {
        "x": 5,
        "y": 10,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "crypto"
        ]
    },
    "crypto/sha512": {
        "x": 5,
        "y": 7,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "crypto"
        ]
    },
    "crypto/subtle": {
        "x": 9,
        "y": 0,
        "ins": [
            "crypto/cipher",
            "crypto/hmac"
        ],
        "outs": []
    },
    "crypto/tls": {
        "x": 3,
        "y": 0,
        "ins": [
            "net/http",
            "net/smtp"
        ],
        "outs": [
            "container/list",
            "crypto/hmac",
            "crypto/rc4",
            "crypto/x509"
        ]
    },
    "crypto/x509": {
        "x": 4,
        "y": 2,
        "ins": [
            "crypto/tls"
        ],
        "outs": [
            "crypto/des",
            "crypto/dsa",
            "crypto/ecdsa",
            "crypto/md5",
            "crypto/rsa",
            "crypto/sha1",
            "crypto/sha256",
            "crypto/sha512",
            "crypto/x509/pkix",
            "encoding/hex",
            "encoding/pem",
            "io/ioutil",
            "net"
        ]
    },
    "crypto/x509/pkix": {
        "x": 5,
        "y": 2,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "encoding/asn1"
        ]
    },
    "database/sql": {
        "x": 0,
        "y": 36,
        "ins": [],
        "outs": [
            "database/sql/driver",
            "sort"
        ]
    },
    "database/sql/driver": {
        "x": 1,
        "y": 8,
        "ins": [
            "database/sql"
        ],
        "outs": [
            "fmt"
        ]
    },
    "debug/dwarf": {
        "x": 1,
        "y": 7,
        "ins": [
            "debug/elf",
            "debug/macho",
            "debug/pe"
        ],
        "outs": [
            "encoding/binary",
            "fmt"
        ]
    },
    "debug/elf": {
        "x": 0,
        "y": 2,
        "ins": [],
        "outs": [
            "bytes",
            "debug/dwarf"
        ]
    },
    "debug/gosym": {
        "x": 0,
        "y": 21,
        "ins": [],
        "outs": [
            "bytes",
            "encoding/binary",
            "fmt",
            "strings"
        ]
    },
    "debug/macho": {
        "x": 0,
        "y": 31,
        "ins": [],
        "outs": [
            "bytes",
            "debug/dwarf"
        ]
    },
    "debug/pe": {
        "x": 0,
        "y": 34,
        "ins": [],
        "outs": [
            "debug/dwarf"
        ]
    },
    "debug/plan9obj": {
        "x": 0,
        "y": 23,
        "ins": [],
        "outs": [
            "encoding/binary",
            "fmt"
        ]
    },
    "encoding": {
        "x": 4,
        "y": 10,
        "ins": [
            "encoding/gob",
            "encoding/json",
            "encoding/xml"
        ],
        "outs": []
    },
    "encoding/ascii85": {
        "x": 0,
        "y": 16,
        "ins": [],
        "outs": [
            "io",
            "strconv"
        ]
    },
    "encoding/asn1": {
        "x": 6,
        "y": 1,
        "ins": [
            "crypto/ecdsa",
            "crypto/x509/pkix"
        ],
        "outs": [
            "bytes",
            "math/big"
        ]
    },
    "encoding/base32": {
        "x": 0,
        "y": 9,
        "ins": [],
        "outs": [
            "bytes",
            "strconv",
            "strings"
        ]
    },
    "encoding/base64": {
        "x": 6,
        "y": 2,
        "ins": [
            "encoding/json",
            "encoding/pem",
            "net/mail"
        ],
        "outs": [
            "bytes",
            "strconv",
            "strings"
        ]
    },
    "encoding/binary": {
        "x": 8,
        "y": 4,
        "ins": [
            "archive/zip",
            "crypto/des",
            "debug/dwarf",
            "debug/gosym",
            "debug/plan9obj",
            "image/png",
            "index/suffixarray",
            "math/big"
        ],
        "outs": [
            "io",
            "reflect"
        ]
    },
    "encoding/csv": {
        "x": 0,
        "y": 25,
        "ins": [],
        "outs": [
            "bufio",
            "fmt",
            "strings"
        ]
    },
    "encoding/gob": {
        "x": 2,
        "y": 4,
        "ins": [
            "net/rpc"
        ],
        "outs": [
            "bufio",
            "encoding",
            "fmt"
        ]
    },
    "encoding/hex": {
        "x": 5,
        "y": 3,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "bytes",
            "fmt"
        ]
    },
    "encoding/json": {
        "x": 3,
        "y": 7,
        "ins": [
            "expvar",
            "html/template"
        ],
        "outs": [
            "encoding",
            "encoding/base64",
            "fmt",
            "sort",
            "unicode/utf16"
        ]
    },
    "encoding/pem": {
        "x": 5,
        "y": 8,
        "ins": [
            "crypto/x509"
        ],
        "outs": [
            "encoding/base64",
            "sort"
        ]
    },
    "encoding/xml": {
        "x": 0,
        "y": 35,
        "ins": [],
        "outs": [
            "bufio",
            "encoding",
            "fmt",
            "strings"
        ]
    },
    "errors": {
        "x": 11,
        "y": 1,
        "ins": [
            "io",
            "strconv",
            "time"
        ],
        "outs": []
    },
    "expvar": {
        "x": 0,
        "y": 12,
        "ins": [],
        "outs": [
            "encoding/json",
            "net/http"
        ]
    },
    "flag": {
        "x": 1,
        "y": 10,
        "ins": [
            "net/http/httptest",
            "testing",
            "testing/quick"
        ],
        "outs": [
            "fmt",
            "sort"
        ]
    },
    "fmt": {
        "x": 8,
        "y": 1,
        "ins": [
            "archive/tar",
            "compress/flate",
            "compress/lzw",
            "database/sql/driver",
            "debug/dwarf",
            "debug/gosym",
            "debug/plan9obj",
            "encoding/csv",
            "encoding/gob",
            "encoding/hex",
            "encoding/json",
            "encoding/xml",
            "flag",
            "go/token",
            "log",
            "math/big",
            "mime",
            "net/http/internal",
            "net/textproto",
            "os/user",
            "runtime/debug",
            "runtime/pprof",
            "text/scanner",
            "text/template/parse"
        ],
        "outs": [
            "os",
            "reflect"
        ]
    },
    "go/ast": {
        "x": 2,
        "y": 8,
        "ins": [
            "go/doc",
            "go/parser",
            "go/printer"
        ],
        "outs": [
            "go/scanner"
        ]
    },
    "go/build": {
        "x": 0,
        "y": 40,
        "ins": [],
        "outs": [
            "bufio",
            "go/doc",
            "go/parser",
            "log"
        ]
    },
    "go/doc": {
        "x": 1,
        "y": 11,
        "ins": [
            "go/build"
        ],
        "outs": [
            "go/ast",
            "path",
            "regexp",
            "text/template"
        ]
    },
    "go/format": {
        "x": 0,
        "y": 27,
        "ins": [],
        "outs": [
            "go/parser",
            "go/printer"
        ]
    },
    "go/parser": {
        "x": 1,
        "y": 12,
        "ins": [
            "go/build",
            "go/format"
        ],
        "outs": [
            "go/ast",
            "io/ioutil"
        ]
    },
    "go/printer": {
        "x": 1,
        "y": 3,
        "ins": [
            "go/format"
        ],
        "outs": [
            "go/ast",
            "text/tabwriter"
        ]
    },
    "go/scanner": {
        "x": 3,
        "y": 11,
        "ins": [
            "go/ast"
        ],
        "outs": [
            "go/token",
            "path/filepath"
        ]
    },
    "go/token": {
        "x": 4,
        "y": 12,
        "ins": [
            "go/scanner"
        ],
        "outs": [
            "fmt",
            "sort"
        ]
    },
    "hash": {
        "x": 7,
        "y": 4,
        "ins": [
            "crypto",
            "crypto/hmac",
            "hash/adler32",
            "hash/crc32",
            "hash/crc64",
            "hash/fnv"
        ],
        "outs": [
            "io"
        ]
    },
    "hash/adler32": {
        "x": 2,
        "y": 1,
        "ins": [
            "compress/zlib"
        ],
        "outs": [
            "hash"
        ]
    },
    "hash/crc32": {
        "x": 4,
        "y": 7,
        "ins": [
            "archive/zip",
            "compress/gzip",
            "image/png"
        ],
        "outs": [
            "hash"
        ]
    },
    "hash/crc64": {
        "x": 0,
        "y": 18,
        "ins": [],
        "outs": [
            "hash"
        ]
    },
    "hash/fnv": {
        "x": 0,
        "y": 29,
        "ins": [],
        "outs": [
            "hash"
        ]
    },
    "html": {
        "x": 3,
        "y": 8,
        "ins": [
            "html/template"
        ],
        "outs": [
            "bytes",
            "strings"
        ]
    },
    "html/template": {
        "x": 2,
        "y": 3,
        "ins": [
            "net/http/pprof",
            "net/rpc"
        ],
        "outs": [
            "encoding/json",
            "html",
            "text/template"
        ]
    },
    "image": {
        "x": 2,
        "y": 5,
        "ins": [
            "image/draw",
            "image/jpeg",
            "image/png"
        ],
        "outs": [
            "bufio",
            "image/color",
            "strconv"
        ]
    },
    "image/color": {
        "x": 3,
        "y": 9,
        "ins": [
            "image",
            "image/color/palette"
        ],
        "outs": []
    },
    "image/color/palette": {
        "x": 1,
        "y": 4,
        "ins": [
            "image/gif"
        ],
        "outs": [
            "image/color"
        ]
    },
    "image/draw": {
        "x": 1,
        "y": 6,
        "ins": [
            "image/gif"
        ],
        "outs": [
            "image"
        ]
    },
    "image/gif": {
        "x": 0,
        "y": 28,
        "ins": [],
        "outs": [
            "compress/lzw",
            "image/color/palette",
            "image/draw"
        ]
    },
    "image/jpeg": {
        "x": 0,
        "y": 26,
        "ins": [],
        "outs": [
            "image"
        ]
    },
    "image/png": {
        "x": 0,
        "y": 14,
        "ins": [],
        "outs": [
            "compress/zlib",
            "encoding/binary",
            "hash/crc32",
            "image"
        ]
    },
    "index/suffixarray": {
        "x": 0,
        "y": 19,
        "ins": [],
        "outs": [
            "encoding/binary",
            "regexp"
        ]
    },
    "internal/syscall": {
        "x": 7,
        "y": 1,
        "ins": [
            "crypto/rand"
        ],
        "outs": [
            "syscall"
        ]
    },
    "io": {
        "x": 10,
        "y": 1,
        "ins": [
            "bytes",
            "crypto/cipher",
            "encoding/ascii85",
            "encoding/binary",
            "hash",
            "os",
            "strings"
        ],
        "outs": [
            "errors",
            "sync"
        ]
    },
    "io/ioutil": {
        "x": 5,
        "y": 11,
        "ins": [
            "archive/tar",
            "archive/zip",
            "crypto/x509",
            "go/parser",
            "net/textproto",
            "runtime/debug",
            "text/template"
        ],
        "outs": [
            "path/filepath",
            "strconv"
        ]
    },
    "log": {
        "x": 3,
        "y": 3,
        "ins": [
            "go/build",
            "log/syslog",
            "net/http",
            "net/mail",
            "testing/iotest"
        ],
        "outs": [
            "fmt"
        ]
    },
    "log/syslog": {
        "x": 0,
        "y": 24,
        "ins": [],
        "outs": [
            "log",
            "net",
            "strings"
        ]
    },
    "math": {
        "x": 11,
        "y": 2,
        "ins": [
            "math/cmplx",
            "math/rand",
            "strconv"
        ],
        "outs": []
    },
    "math/big": {
        "x": 7,
        "y": 2,
        "ins": [
            "crypto/dsa",
            "crypto/elliptic",
            "crypto/rand",
            "encoding/asn1"
        ],
        "outs": [
            "encoding/binary",
            "fmt",
            "math/rand",
            "strings"
        ]
    },
    "math/cmplx": {
        "x": 0,
        "y": 30,
        "ins": [],
        "outs": [
            "math"
        ]
    },
    "math/rand": {
        "x": 8,
        "y": 2,
        "ins": [
            "math/big",
            "net",
            "testing/quick"
        ],
        "outs": [
            "math",
            "sync"
        ]
    },
    "mime": {
        "x": 4,
        "y": 5,
        "ins": [
            "mime/multipart"
        ],
        "outs": [
            "bufio",
            "fmt",
            "sort",
            "strings"
        ]
    },
    "mime/multipart": {
        "x": 3,
        "y": 4,
        "ins": [
            "net/http"
        ],
        "outs": [
            "crypto/rand",
            "mime",
            "net/textproto"
        ]
    },
    "net": {
        "x": 5,
        "y": 12,
        "ins": [
            "crypto/x509",
            "log/syslog",
            "net/textproto"
        ],
        "outs": [
            "math/rand",
            "os",
            "sort"
        ]
    },
    "net/http": {
        "x": 2,
        "y": 2,
        "ins": [
            "expvar",
            "net/http/cgi",
            "net/http/cookiejar",
            "net/http/httptest",
            "net/http/httputil",
            "net/http/pprof",
            "net/rpc"
        ],
        "outs": [
            "compress/gzip",
            "crypto/tls",
            "log",
            "mime/multipart",
            "net/http/internal",
            "net/url",
            "path"
        ]
    },
    "net/http/cgi": {
        "x": 1,
        "y": 0,
        "ins": [
            "net/http/fcgi"
        ],
        "outs": [
            "net/http",
            "os/exec",
            "regexp"
        ]
    },
    "net/http/cookiejar": {
        "x": 0,
        "y": 5,
        "ins": [],
        "outs": [
            "net/http"
        ]
    },
    "net/http/fcgi": {
        "x": 0,
        "y": 1,
        "ins": [],
        "outs": [
            "net/http/cgi"
        ]
    },
    "net/http/httptest": {
        "x": 0,
        "y": 17,
        "ins": [],
        "outs": [
            "flag",
            "net/http"
        ]
    },
    "net/http/httputil": {
        "x": 0,
        "y": 7,
        "ins": [],
        "outs": [
            "net/http"
        ]
    },
    "net/http/internal": {
        "x": 3,
        "y": 2,
        "ins": [
            "net/http"
        ],
        "outs": [
            "bufio",
            "fmt"
        ]
    },
    "net/http/pprof": {
        "x": 0,
        "y": 0,
        "ins": [],
        "outs": [
            "html/template",
            "net/http",
            "runtime/pprof"
        ]
    },
    "net/mail": {
        "x": 0,
        "y": 33,
        "ins": [],
        "outs": [
            "encoding/base64",
            "log",
            "net/textproto"
        ]
    },
    "net/rpc": {
        "x": 1,
        "y": 2,
        "ins": [
            "net/rpc/jsonrpc"
        ],
        "outs": [
            "encoding/gob",
            "html/template",
            "net/http"
        ]
    },
    "net/rpc/jsonrpc": {
        "x": 0,
        "y": 22,
        "ins": [],
        "outs": [
            "net/rpc"
        ]
    },
    "net/smtp": {
        "x": 0,
        "y": 6,
        "ins": [],
        "outs": [
            "crypto/tls",
            "net/textproto"
        ]
    },
    "net/textproto": {
        "x": 4,
        "y": 4,
        "ins": [
            "mime/multipart",
            "net/mail",
            "net/smtp"
        ],
        "outs": [
            "bufio",
            "fmt",
            "io/ioutil",
            "net"
        ]
    },
    "net/url": {
        "x": 4,
        "y": 9,
        "ins": [
            "net/http",
            "text/template"
        ],
        "outs": [
            "bytes",
            "sort",
            "strconv",
            "strings"
        ]
    },
    "os": {
        "x": 9,
        "y": 1,
        "ins": [
            "fmt",
            "net",
            "os/signal",
            "path/filepath"
        ],
        "outs": [
            "io",
            "time"
        ]
    },
    "os/exec": {
        "x": 2,
        "y": 0,
        "ins": [
            "net/http/cgi"
        ],
        "outs": [
            "path/filepath",
            "strconv"
        ]
    },
    "os/signal": {
        "x": 0,
        "y": 4,
        "ins": [],
        "outs": [
            "os"
        ]
    },
    "os/user": {
        "x": 0,
        "y": 15,
        "ins": [],
        "outs": [
            "fmt"
        ]
    },
    "path": {
        "x": 3,
        "y": 1,
        "ins": [
            "archive/tar",
            "archive/zip",
            "go/doc",
            "net/http"
        ],
        "outs": [
            "strings"
        ]
    },
    "path/filepath": {
        "x": 6,
        "y": 5,
        "ins": [
            "go/scanner",
            "io/ioutil",
            "os/exec"
        ],
        "outs": [
            "bytes",
            "os",
            "sort",
            "strings"
        ]
    },
    "reflect": {
        "x": 9,
        "y": 2,
        "ins": [
            "encoding/binary",
            "fmt"
        ],
        "outs": [
            "strconv",
            "sync"
        ]
    },
    "regexp": {
        "x": 2,
        "y": 7,
        "ins": [
            "go/doc",
            "index/suffixarray",
            "net/http/cgi"
        ],
        "outs": [
            "regexp/syntax"
        ]
    },
    "regexp/syntax": {
        "x": 3,
        "y": 10,
        "ins": [
            "regexp"
        ],
        "outs": [
            "bytes",
            "sort",
            "strconv",
            "strings"
        ]
    },
    "runtime": {
        "x": 13,
        "y": 0,
        "ins": [
            "sync"
        ],
        "outs": []
    },
    "runtime/debug": {
        "x": 0,
        "y": 38,
        "ins": [],
        "outs": [
            "fmt",
            "io/ioutil"
        ]
    },
    "runtime/pprof": {
        "x": 1,
        "y": 9,
        "ins": [
            "net/http/pprof",
            "testing"
        ],
        "outs": [
            "bufio",
            "fmt",
            "sort",
            "strings",
            "text/tabwriter"
        ]
    },
    "runtime/race": {
        "x": 0,
        "y": 32,
        "ins": [],
        "outs": []
    },
    "sort": {
        "x": 7,
        "y": 5,
        "ins": [
            "compress/bzip2",
            "compress/flate",
            "container/heap",
            "database/sql",
            "encoding/json",
            "encoding/pem",
            "flag",
            "go/token",
            "mime",
            "net",
            "net/url",
            "path/filepath",
            "regexp/syntax",
            "runtime/pprof"
        ],
        "outs": []
    },
    "strconv": {
        "x": 10,
        "y": 2,
        "ins": [
            "crypto",
            "crypto/aes",
            "crypto/rc4",
            "encoding/ascii85",
            "encoding/base32",
            "encoding/base64",
            "image",
            "io/ioutil",
            "net/url",
            "os/exec",
            "reflect",
            "regexp/syntax"
        ],
        "outs": [
            "errors",
            "math",
            "unicode/utf8"
        ]
    },
    "strings": {
        "x": 8,
        "y": 3,
        "ins": [
            "debug/gosym",
            "encoding/base32",
            "encoding/base64",
            "encoding/csv",
            "encoding/xml",
            "html",
            "log/syslog",
            "math/big",
            "mime",
            "net/url",
            "path",
            "path/filepath",
            "regexp/syntax",
            "runtime/pprof",
            "testing/quick",
            "text/template/parse"
        ],
        "outs": [
            "io",
            "unicode",
            "unicode/utf8"
        ]
    },
    "sync": {
        "x": 12,
        "y": 0,
        "ins": [
            "io",
            "math/rand",
            "reflect",
            "syscall"
        ],
        "outs": [
            "runtime",
            "sync/atomic"
        ]
    },
    "sync/atomic": {
        "x": 13,
        "y": 1,
        "ins": [
            "sync"
        ],
        "outs": []
    },
    "syscall": {
        "x": 11,
        "y": 0,
        "ins": [
            "internal/syscall",
            "time"
        ],
        "outs": [
            "sync"
        ]
    },
    "testing": {
        "x": 0,
        "y": 37,
        "ins": [],
        "outs": [
            "flag",
            "runtime/pprof"
        ]
    },
    "testing/iotest": {
        "x": 0,
        "y": 41,
        "ins": [],
        "outs": [
            "log"
        ]
    },
    "testing/quick": {
        "x": 0,
        "y": 39,
        "ins": [],
        "outs": [
            "flag",
            "math/rand",
            "strings"
        ]
    },
    "text/scanner": {
        "x": 0,
        "y": 10,
        "ins": [],
        "outs": [
            "bytes",
            "fmt"
        ]
    },
    "text/tabwriter": {
        "x": 2,
        "y": 6,
        "ins": [
            "go/printer",
            "runtime/pprof"
        ],
        "outs": [
            "bytes"
        ]
    },
    "text/template": {
        "x": 3,
        "y": 6,
        "ins": [
            "go/doc",
            "html/template"
        ],
        "outs": [
            "io/ioutil",
            "net/url",
            "text/template/parse"
        ]
    },
    "text/template/parse": {
        "x": 4,
        "y": 8,
        "ins": [
            "text/template"
        ],
        "outs": [
            "bytes",
            "fmt",
            "strings"
        ]
    },
    "time": {
        "x": 10,
        "y": 0,
        "ins": [
            "os"
        ],
        "outs": [
            "errors",
            "syscall"
        ]
    },
    "unicode": {
        "x": 9,
        "y": 3,
        "ins": [
            "bytes",
            "strings"
        ],
        "outs": []
    },
    "unicode/utf16": {
        "x": 4,
        "y": 11,
        "ins": [
            "encoding/json"
        ],
        "outs": []
    },
    "unicode/utf8": {
        "x": 11,
        "y": 3,
        "ins": [
            "bytes",
            "strconv",
            "strings"
        ],
        "outs": []
    }
}
