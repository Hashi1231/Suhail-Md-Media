/**

//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                      //
//                                                                                                      // 
//                                         Ｖ：1．2．2                                                   // 
//                                            _                                                         //
//                                            _                                                         //
//                            HASHI BOTS                                                                //
//                                         _                                                            //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : HASHII BOT
   * @author : HASHII
   * @youtube : 
   * @infoription : HASHI ,A Multi-functional whatsapp user bot.
   * @version 1.2.2 
*
   * Licensed under the  GPL-3.0 License;
* 
   * ┌┤Created By HASHI Tech Info.
   * © 2023 HASHI BOTS ✭ ⛥.
   * plugin date : 10/6/2023
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.
**/



const { smd, Config,smdBuffer,  prefix } = require('../lib')


var surl = ' // Source URL
const number = '923434621766'
var name = ' HASHI Tech'
var body = '𝑇𝛩𝑈𝐶𝛨 𝛨𝛯𝑅𝛯'
var image = 'https://i.imgur.com/NTRObnk.jpeg'
let text = `╭═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄
│       「 𝗠𝗬 𝗜𝗡𝗧𝗥𝗢 」
│ Name      : HASHIɪʟ ᴛᴇᴄʜ ɪиғօ
│ Place       : ʟαнᴏʀᴇ ᴘᴋ
│ Gender    :  ᴍᴀʟᴇ
│ Age          : 22_
│ Phone     : wa.me/9234344621766
│ Youtube   : 
│ Status     : ɢᴀᴍᴇ ᴅᴇᴠᴇʟᴏᴘᴇʀ
╰═══ ━ ━ ━ ━ • ━ ━ ━ ━ ═══♡᭄`



 //---------------------------------------------------------------------------
 smd({
             pattern: "intro",
             desc: "Show intro of user",
             category: "fun",
             filename: __filename,
             use: '<group link.>',
         },
         async(message) => {
    try{
          let media ;try{ media = await smdBuffer(image) }catch{media = log0}
           const q =await message.bot.fakeMessage("contact",{},name) 
           let contextInfo = {...(await message.bot.contextInfo(name,body,media,1,surl, 2) )}
           await message.send(text, {contextInfo : contextInfo },"suhail",  q )
    }catch(e){ await message.error(`${e}\n\ncommand: intro`,e,false)}


 })
