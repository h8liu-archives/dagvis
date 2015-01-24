var gostd = {
    "archive/tar": {
        "x": 7,
        "y": 19,
        "ins": [
            "fmt",
            "io/ioutil",
            "path"
        ],
        "outs": []
    },
    "archive/zip": {
        "x": 7,
        "y": 17,
        "ins": [
            "compress/flate",
            "encoding/binary",
            "hash/crc32",
            "io/ioutil",
            "path"
        ],
        "outs": []
    },
    "bufio": {
        "x": 4,
        "y": 8,
        "ins": [
            "bytes"
        ],
        "outs": [
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
        ]
    },
    "bytes": {
        "x": 3,
        "y": 3,
        "ins": [
            "io",
            "unicode",
            "unicode/utf8"
        ],
        "outs": [
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
        ]
    },
    "compress/bzip2": {
        "x": 5,
        "y": 9,
        "ins": [
            "bufio",
            "sort"
        ],
        "outs": []
    },
    "compress/flate": {
        "x": 6,
        "y": 14,
        "ins": [
            "bufio",
            "fmt",
            "sort"
        ],
        "outs": [
            "archive/zip",
            "compress/gzip",
            "compress/zlib"
        ]
    },
    "compress/gzip": {
        "x": 7,
        "y": 10,
        "ins": [
            "compress/flate",
            "hash/crc32"
        ],
        "outs": [
            "net/http"
        ]
    },
    "compress/lzw": {
        "x": 6,
        "y": 20,
        "ins": [
            "bufio",
            "fmt"
        ],
        "outs": [
            "image/gif"
        ]
    },
    "compress/zlib": {
        "x": 7,
        "y": 9,
        "ins": [
            "compress/flate",
            "hash/adler32"
        ],
        "outs": [
            "image/png"
        ]
    },
    "container/heap": {
        "x": 1,
        "y": 0,
        "ins": [
            "sort"
        ],
        "outs": []
    },
    "container/list": {
        "x": 0,
        "y": 6,
        "ins": [],
        "outs": [
            "crypto/tls"
        ]
    },
    "container/ring": {
        "x": 0,
        "y": 12,
        "ins": [],
        "outs": []
    },
    "crypto": {
        "x": 4,
        "y": 5,
        "ins": [
            "hash",
            "strconv"
        ],
        "outs": [
            "crypto/ecdsa",
            "crypto/md5",
            "crypto/rsa",
            "crypto/sha1",
            "crypto/sha256",
            "crypto/sha512"
        ]
    },
    "crypto/aes": {
        "x": 4,
        "y": 16,
        "ins": [
            "crypto/cipher",
            "strconv"
        ],
        "outs": [
            "crypto/rand"
        ]
    },
    "crypto/cipher": {
        "x": 3,
        "y": 7,
        "ins": [
            "crypto/subtle",
            "io"
        ],
        "outs": [
            "crypto/aes",
            "crypto/des"
        ]
    },
    "crypto/des": {
        "x": 4,
        "y": 15,
        "ins": [
            "crypto/cipher",
            "encoding/binary"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "crypto/dsa": {
        "x": 7,
        "y": 2,
        "ins": [
            "math/big"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "crypto/ecdsa": {
        "x": 8,
        "y": 2,
        "ins": [
            "crypto",
            "crypto/elliptic",
            "encoding/asn1"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "crypto/elliptic": {
        "x": 7,
        "y": 3,
        "ins": [
            "math/big"
        ],
        "outs": [
            "crypto/ecdsa"
        ]
    },
    "crypto/hmac": {
        "x": 4,
        "y": 4,
        "ins": [
            "crypto/subtle",
            "hash"
        ],
        "outs": [
            "crypto/tls"
        ]
    },
    "crypto/md5": {
        "x": 5,
        "y": 4,
        "ins": [
            "crypto"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "crypto/rand": {
        "x": 7,
        "y": 0,
        "ins": [
            "bufio",
            "crypto/aes",
            "internal/syscall",
            "math/big"
        ],
        "outs": [
            "crypto/rsa",
            "mime/multipart"
        ]
    },
    "crypto/rc4": {
        "x": 2,
        "y": 0,
        "ins": [
            "strconv"
        ],
        "outs": [
            "crypto/tls"
        ]
    },
    "crypto/rsa": {
        "x": 8,
        "y": 0,
        "ins": [
            "crypto",
            "crypto/rand"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "crypto/sha1": {
        "x": 5,
        "y": 5,
        "ins": [
            "crypto"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "crypto/sha256": {
        "x": 5,
        "y": 6,
        "ins": [
            "crypto"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "crypto/sha512": {
        "x": 5,
        "y": 7,
        "ins": [
            "crypto"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "crypto/subtle": {
        "x": 0,
        "y": 3,
        "ins": [],
        "outs": [
            "crypto/cipher",
            "crypto/hmac"
        ]
    },
    "crypto/tls": {
        "x": 10,
        "y": 0,
        "ins": [
            "container/list",
            "crypto/hmac",
            "crypto/rc4",
            "crypto/x509"
        ],
        "outs": [
            "net/http",
            "net/smtp"
        ]
    },
    "crypto/x509": {
        "x": 9,
        "y": 0,
        "ins": [
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
        ],
        "outs": [
            "crypto/tls"
        ]
    },
    "crypto/x509/pkix": {
        "x": 8,
        "y": 1,
        "ins": [
            "encoding/asn1"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "database/sql": {
        "x": 7,
        "y": 13,
        "ins": [
            "database/sql/driver",
            "sort"
        ],
        "outs": []
    },
    "database/sql/driver": {
        "x": 6,
        "y": 16,
        "ins": [
            "fmt"
        ],
        "outs": [
            "database/sql"
        ]
    },
    "debug/dwarf": {
        "x": 6,
        "y": 4,
        "ins": [
            "encoding/binary",
            "fmt"
        ],
        "outs": [
            "debug/elf",
            "debug/macho",
            "debug/pe"
        ]
    },
    "debug/elf": {
        "x": 7,
        "y": 6,
        "ins": [
            "bytes",
            "debug/dwarf"
        ],
        "outs": []
    },
    "debug/gosym": {
        "x": 6,
        "y": 0,
        "ins": [
            "bytes",
            "encoding/binary",
            "fmt",
            "strings"
        ],
        "outs": []
    },
    "debug/macho": {
        "x": 7,
        "y": 4,
        "ins": [
            "bytes",
            "debug/dwarf"
        ],
        "outs": []
    },
    "debug/pe": {
        "x": 7,
        "y": 5,
        "ins": [
            "debug/dwarf"
        ],
        "outs": []
    },
    "debug/plan9obj": {
        "x": 6,
        "y": 9,
        "ins": [
            "encoding/binary",
            "fmt"
        ],
        "outs": []
    },
    "encoding": {
        "x": 0,
        "y": 2,
        "ins": [],
        "outs": [
            "encoding/gob",
            "encoding/json",
            "encoding/xml"
        ]
    },
    "encoding/ascii85": {
        "x": 3,
        "y": 4,
        "ins": [
            "io",
            "strconv"
        ],
        "outs": []
    },
    "encoding/asn1": {
        "x": 7,
        "y": 1,
        "ins": [
            "bytes",
            "math/big"
        ],
        "outs": [
            "crypto/ecdsa",
            "crypto/x509/pkix"
        ]
    },
    "encoding/base32": {
        "x": 4,
        "y": 10,
        "ins": [
            "bytes",
            "strconv",
            "strings"
        ],
        "outs": []
    },
    "encoding/base64": {
        "x": 4,
        "y": 14,
        "ins": [
            "bytes",
            "strconv",
            "strings"
        ],
        "outs": [
            "encoding/json",
            "encoding/pem",
            "net/mail"
        ]
    },
    "encoding/binary": {
        "x": 3,
        "y": 6,
        "ins": [
            "io",
            "reflect"
        ],
        "outs": [
            "archive/zip",
            "crypto/des",
            "debug/dwarf",
            "debug/gosym",
            "debug/plan9obj",
            "image/png",
            "index/suffixarray",
            "math/big"
        ]
    },
    "encoding/csv": {
        "x": 6,
        "y": 12,
        "ins": [
            "bufio",
            "fmt",
            "strings"
        ],
        "outs": []
    },
    "encoding/gob": {
        "x": 6,
        "y": 18,
        "ins": [
            "bufio",
            "encoding",
            "fmt"
        ],
        "outs": [
            "net/rpc"
        ]
    },
    "encoding/hex": {
        "x": 6,
        "y": 17,
        "ins": [
            "bytes",
            "fmt"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "encoding/json": {
        "x": 6,
        "y": 2,
        "ins": [
            "encoding",
            "encoding/base64",
            "fmt",
            "sort",
            "unicode/utf16"
        ],
        "outs": [
            "expvar",
            "html/template"
        ]
    },
    "encoding/pem": {
        "x": 5,
        "y": 11,
        "ins": [
            "encoding/base64",
            "sort"
        ],
        "outs": [
            "crypto/x509"
        ]
    },
    "encoding/xml": {
        "x": 6,
        "y": 10,
        "ins": [
            "bufio",
            "encoding",
            "fmt",
            "strings"
        ],
        "outs": []
    },
    "errors": {
        "x": 0,
        "y": 0,
        "ins": [],
        "outs": [
            "io",
            "strconv",
            "time"
        ]
    },
    "expvar": {
        "x": 12,
        "y": 3,
        "ins": [
            "encoding/json",
            "net/http"
        ],
        "outs": []
    },
    "flag": {
        "x": 6,
        "y": 5,
        "ins": [
            "fmt",
            "sort"
        ],
        "outs": [
            "net/http/httptest",
            "testing",
            "testing/quick"
        ]
    },
    "fmt": {
        "x": 5,
        "y": 0,
        "ins": [
            "os",
            "reflect"
        ],
        "outs": [
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
        ]
    },
    "go/ast": {
        "x": 8,
        "y": 4,
        "ins": [
            "go/scanner"
        ],
        "outs": [
            "go/doc",
            "go/parser",
            "go/printer"
        ]
    },
    "go/build": {
        "x": 10,
        "y": 1,
        "ins": [
            "bufio",
            "go/doc",
            "go/parser",
            "log"
        ],
        "outs": []
    },
    "go/doc": {
        "x": 9,
        "y": 1,
        "ins": [
            "go/ast",
            "path",
            "regexp",
            "text/template"
        ],
        "outs": [
            "go/build"
        ]
    },
    "go/format": {
        "x": 10,
        "y": 2,
        "ins": [
            "go/parser",
            "go/printer"
        ],
        "outs": []
    },
    "go/parser": {
        "x": 9,
        "y": 2,
        "ins": [
            "go/ast",
            "io/ioutil"
        ],
        "outs": [
            "go/build",
            "go/format"
        ]
    },
    "go/printer": {
        "x": 9,
        "y": 3,
        "ins": [
            "go/ast",
            "text/tabwriter"
        ],
        "outs": [
            "go/format"
        ]
    },
    "go/scanner": {
        "x": 7,
        "y": 14,
        "ins": [
            "go/token",
            "path/filepath"
        ],
        "outs": [
            "go/ast"
        ]
    },
    "go/token": {
        "x": 6,
        "y": 19,
        "ins": [
            "fmt",
            "sort"
        ],
        "outs": [
            "go/scanner"
        ]
    },
    "hash": {
        "x": 3,
        "y": 2,
        "ins": [
            "io"
        ],
        "outs": [
            "crypto",
            "crypto/hmac",
            "hash/adler32",
            "hash/crc32",
            "hash/crc64",
            "hash/fnv"
        ]
    },
    "hash/adler32": {
        "x": 4,
        "y": 6,
        "ins": [
            "hash"
        ],
        "outs": [
            "compress/zlib"
        ]
    },
    "hash/crc32": {
        "x": 4,
        "y": 2,
        "ins": [
            "hash"
        ],
        "outs": [
            "archive/zip",
            "compress/gzip",
            "image/png"
        ]
    },
    "hash/crc64": {
        "x": 4,
        "y": 1,
        "ins": [
            "hash"
        ],
        "outs": []
    },
    "hash/fnv": {
        "x": 4,
        "y": 3,
        "ins": [
            "hash"
        ],
        "outs": []
    },
    "html": {
        "x": 4,
        "y": 12,
        "ins": [
            "bytes",
            "strings"
        ],
        "outs": [
            "html/template"
        ]
    },
    "html/template": {
        "x": 8,
        "y": 7,
        "ins": [
            "encoding/json",
            "html",
            "text/template"
        ],
        "outs": [
            "net/http/pprof",
            "net/rpc"
        ]
    },
    "image": {
        "x": 5,
        "y": 8,
        "ins": [
            "bufio",
            "image/color",
            "strconv"
        ],
        "outs": [
            "image/draw",
            "image/jpeg",
            "image/png"
        ]
    },
    "image/color": {
        "x": 0,
        "y": 11,
        "ins": [],
        "outs": [
            "image",
            "image/color/palette"
        ]
    },
    "image/color/palette": {
        "x": 1,
        "y": 3,
        "ins": [
            "image/color"
        ],
        "outs": [
            "image/gif"
        ]
    },
    "image/draw": {
        "x": 6,
        "y": 23,
        "ins": [
            "image"
        ],
        "outs": [
            "image/gif"
        ]
    },
    "image/gif": {
        "x": 7,
        "y": 20,
        "ins": [
            "compress/lzw",
            "image/color/palette",
            "image/draw"
        ],
        "outs": []
    },
    "image/jpeg": {
        "x": 6,
        "y": 24,
        "ins": [
            "image"
        ],
        "outs": []
    },
    "image/png": {
        "x": 8,
        "y": 3,
        "ins": [
            "compress/zlib",
            "encoding/binary",
            "hash/crc32",
            "image"
        ],
        "outs": []
    },
    "index/suffixarray": {
        "x": 6,
        "y": 25,
        "ins": [
            "encoding/binary",
            "regexp"
        ],
        "outs": []
    },
    "internal/syscall": {
        "x": 3,
        "y": 0,
        "ins": [
            "syscall"
        ],
        "outs": [
            "crypto/rand"
        ]
    },
    "io": {
        "x": 2,
        "y": 4,
        "ins": [
            "errors",
            "sync"
        ],
        "outs": [
            "bytes",
            "crypto/cipher",
            "encoding/ascii85",
            "encoding/binary",
            "hash",
            "os",
            "strings"
        ]
    },
    "io/ioutil": {
        "x": 6,
        "y": 22,
        "ins": [
            "path/filepath",
            "strconv"
        ],
        "outs": [
            "archive/tar",
            "archive/zip",
            "crypto/x509",
            "go/parser",
            "net/textproto",
            "runtime/debug",
            "text/template"
        ]
    },
    "log": {
        "x": 6,
        "y": 15,
        "ins": [
            "fmt"
        ],
        "outs": [
            "go/build",
            "log/syslog",
            "net/http",
            "net/mail",
            "testing/iotest"
        ]
    },
    "log/syslog": {
        "x": 7,
        "y": 12,
        "ins": [
            "log",
            "net",
            "strings"
        ],
        "outs": []
    },
    "math": {
        "x": 0,
        "y": 4,
        "ins": [],
        "outs": [
            "math/cmplx",
            "math/rand",
            "strconv"
        ]
    },
    "math/big": {
        "x": 6,
        "y": 1,
        "ins": [
            "encoding/binary",
            "fmt",
            "math/rand",
            "strings"
        ],
        "outs": [
            "crypto/dsa",
            "crypto/elliptic",
            "crypto/rand",
            "encoding/asn1"
        ]
    },
    "math/cmplx": {
        "x": 1,
        "y": 1,
        "ins": [
            "math"
        ],
        "outs": []
    },
    "math/rand": {
        "x": 2,
        "y": 1,
        "ins": [
            "math",
            "sync"
        ],
        "outs": [
            "math/big",
            "net",
            "testing/quick"
        ]
    },
    "mime": {
        "x": 6,
        "y": 6,
        "ins": [
            "bufio",
            "fmt",
            "sort",
            "strings"
        ],
        "outs": [
            "mime/multipart"
        ]
    },
    "mime/multipart": {
        "x": 8,
        "y": 6,
        "ins": [
            "crypto/rand",
            "mime",
            "net/textproto"
        ],
        "outs": [
            "net/http"
        ]
    },
    "net": {
        "x": 5,
        "y": 1,
        "ins": [
            "math/rand",
            "os",
            "sort"
        ],
        "outs": [
            "crypto/x509",
            "log/syslog",
            "net/textproto"
        ]
    },
    "net/http": {
        "x": 11,
        "y": 1,
        "ins": [
            "compress/gzip",
            "crypto/tls",
            "log",
            "mime/multipart",
            "net/http/internal",
            "net/url",
            "path"
        ],
        "outs": [
            "expvar",
            "net/http/cgi",
            "net/http/cookiejar",
            "net/http/httptest",
            "net/http/httputil",
            "net/http/pprof",
            "net/rpc"
        ]
    },
    "net/http/cgi": {
        "x": 12,
        "y": 2,
        "ins": [
            "net/http",
            "os/exec",
            "regexp"
        ],
        "outs": [
            "net/http/fcgi"
        ]
    },
    "net/http/cookiejar": {
        "x": 12,
        "y": 0,
        "ins": [
            "net/http"
        ],
        "outs": []
    },
    "net/http/fcgi": {
        "x": 13,
        "y": 0,
        "ins": [
            "net/http/cgi"
        ],
        "outs": []
    },
    "net/http/httptest": {
        "x": 12,
        "y": 4,
        "ins": [
            "flag",
            "net/http"
        ],
        "outs": []
    },
    "net/http/httputil": {
        "x": 12,
        "y": 1,
        "ins": [
            "net/http"
        ],
        "outs": []
    },
    "net/http/internal": {
        "x": 6,
        "y": 13,
        "ins": [
            "bufio",
            "fmt"
        ],
        "outs": [
            "net/http"
        ]
    },
    "net/http/pprof": {
        "x": 12,
        "y": 5,
        "ins": [
            "html/template",
            "net/http",
            "runtime/pprof"
        ],
        "outs": []
    },
    "net/mail": {
        "x": 8,
        "y": 5,
        "ins": [
            "encoding/base64",
            "log",
            "net/textproto"
        ],
        "outs": []
    },
    "net/rpc": {
        "x": 12,
        "y": 6,
        "ins": [
            "encoding/gob",
            "html/template",
            "net/http"
        ],
        "outs": [
            "net/rpc/jsonrpc"
        ]
    },
    "net/rpc/jsonrpc": {
        "x": 13,
        "y": 1,
        "ins": [
            "net/rpc"
        ],
        "outs": []
    },
    "net/smtp": {
        "x": 11,
        "y": 0,
        "ins": [
            "crypto/tls",
            "net/textproto"
        ],
        "outs": []
    },
    "net/textproto": {
        "x": 7,
        "y": 15,
        "ins": [
            "bufio",
            "fmt",
            "io/ioutil",
            "net"
        ],
        "outs": [
            "mime/multipart",
            "net/mail",
            "net/smtp"
        ]
    },
    "net/url": {
        "x": 4,
        "y": 9,
        "ins": [
            "bytes",
            "sort",
            "strconv",
            "strings"
        ],
        "outs": [
            "net/http",
            "text/template"
        ]
    },
    "os": {
        "x": 4,
        "y": 0,
        "ins": [
            "io",
            "time"
        ],
        "outs": [
            "fmt",
            "net",
            "os/signal",
            "path/filepath"
        ]
    },
    "os/exec": {
        "x": 6,
        "y": 21,
        "ins": [
            "path/filepath",
            "strconv"
        ],
        "outs": [
            "net/http/cgi"
        ]
    },
    "os/signal": {
        "x": 5,
        "y": 3,
        "ins": [
            "os"
        ],
        "outs": []
    },
    "os/user": {
        "x": 6,
        "y": 11,
        "ins": [
            "fmt"
        ],
        "outs": []
    },
    "path": {
        "x": 4,
        "y": 11,
        "ins": [
            "strings"
        ],
        "outs": [
            "archive/tar",
            "archive/zip",
            "go/doc",
            "net/http"
        ]
    },
    "path/filepath": {
        "x": 5,
        "y": 2,
        "ins": [
            "bytes",
            "os",
            "sort",
            "strings"
        ],
        "outs": [
            "go/scanner",
            "io/ioutil",
            "os/exec"
        ]
    },
    "reflect": {
        "x": 2,
        "y": 3,
        "ins": [
            "strconv",
            "sync"
        ],
        "outs": [
            "encoding/binary",
            "fmt"
        ]
    },
    "regexp": {
        "x": 5,
        "y": 10,
        "ins": [
            "regexp/syntax"
        ],
        "outs": [
            "go/doc",
            "index/suffixarray",
            "net/http/cgi"
        ]
    },
    "regexp/syntax": {
        "x": 4,
        "y": 13,
        "ins": [
            "bytes",
            "sort",
            "strconv",
            "strings"
        ],
        "outs": [
            "regexp"
        ]
    },
    "runtime": {
        "x": 0,
        "y": 7,
        "ins": [],
        "outs": [
            "sync"
        ]
    },
    "runtime/debug": {
        "x": 7,
        "y": 16,
        "ins": [
            "fmt",
            "io/ioutil"
        ],
        "outs": []
    },
    "runtime/pprof": {
        "x": 6,
        "y": 3,
        "ins": [
            "bufio",
            "fmt",
            "sort",
            "strings",
            "text/tabwriter"
        ],
        "outs": [
            "net/http/pprof",
            "testing"
        ]
    },
    "runtime/race": {
        "x": 0,
        "y": 9,
        "ins": [],
        "outs": []
    },
    "sort": {
        "x": 0,
        "y": 1,
        "ins": [],
        "outs": [
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
        ]
    },
    "strconv": {
        "x": 1,
        "y": 2,
        "ins": [
            "errors",
            "math",
            "unicode/utf8"
        ],
        "outs": [
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
        ]
    },
    "strings": {
        "x": 3,
        "y": 5,
        "ins": [
            "io",
            "unicode",
            "unicode/utf8"
        ],
        "outs": [
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
        ]
    },
    "sync": {
        "x": 1,
        "y": 4,
        "ins": [
            "runtime",
            "sync/atomic"
        ],
        "outs": [
            "io",
            "math/rand",
            "reflect",
            "syscall"
        ]
    },
    "sync/atomic": {
        "x": 0,
        "y": 13,
        "ins": [],
        "outs": [
            "sync"
        ]
    },
    "syscall": {
        "x": 2,
        "y": 2,
        "ins": [
            "sync"
        ],
        "outs": [
            "internal/syscall",
            "time"
        ]
    },
    "testing": {
        "x": 7,
        "y": 7,
        "ins": [
            "flag",
            "runtime/pprof"
        ],
        "outs": []
    },
    "testing/iotest": {
        "x": 7,
        "y": 11,
        "ins": [
            "log"
        ],
        "outs": []
    },
    "testing/quick": {
        "x": 7,
        "y": 8,
        "ins": [
            "flag",
            "math/rand",
            "strings"
        ],
        "outs": []
    },
    "text/scanner": {
        "x": 6,
        "y": 7,
        "ins": [
            "bytes",
            "fmt"
        ],
        "outs": []
    },
    "text/tabwriter": {
        "x": 4,
        "y": 7,
        "ins": [
            "bytes"
        ],
        "outs": [
            "go/printer",
            "runtime/pprof"
        ]
    },
    "text/template": {
        "x": 7,
        "y": 18,
        "ins": [
            "io/ioutil",
            "net/url",
            "text/template/parse"
        ],
        "outs": [
            "go/doc",
            "html/template"
        ]
    },
    "text/template/parse": {
        "x": 6,
        "y": 8,
        "ins": [
            "bytes",
            "fmt",
            "strings"
        ],
        "outs": [
            "text/template"
        ]
    },
    "time": {
        "x": 3,
        "y": 1,
        "ins": [
            "errors",
            "syscall"
        ],
        "outs": [
            "os"
        ]
    },
    "unicode": {
        "x": 0,
        "y": 10,
        "ins": [],
        "outs": [
            "bytes",
            "strings"
        ]
    },
    "unicode/utf16": {
        "x": 0,
        "y": 8,
        "ins": [],
        "outs": [
            "encoding/json"
        ]
    },
    "unicode/utf8": {
        "x": 0,
        "y": 5,
        "ins": [],
        "outs": [
            "bytes",
            "strconv",
            "strings"
        ]
    }
}