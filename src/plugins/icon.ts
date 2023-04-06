import Menu from 'vue-material-design-icons/Menu.vue'
import TrashCan from 'vue-material-design-icons/TrashCanOutline.vue'
import FileEdit from 'vue-material-design-icons/FileEditOutline.vue'
import Save from 'vue-material-design-icons/ContentSave.vue'
import Text from 'vue-material-design-icons/TextBoxOutline.vue'
import Download from 'vue-material-design-icons/Download.vue'
import Upload from 'vue-material-design-icons/Upload.vue'
import Close from 'vue-material-design-icons/CloseCircleOutline.vue'
import Link from 'vue-material-design-icons/Link.vue'
import Plus from 'vue-material-design-icons/Plus.vue'
import FileAccount from 'vue-material-design-icons/FileAccount.vue'
import Tune from 'vue-material-design-icons/TuneVariant.vue'
import Cog from 'vue-material-design-icons/Cog.vue'
import Bubbles from 'vue-material-design-icons/ChartBubble.vue'
import Stop from 'vue-material-design-icons/StopCircleOutline.vue'
import History from 'vue-material-design-icons/History.vue'
import Send from 'vue-material-design-icons/Send.vue'
import AlignJustify from 'vue-material-design-icons/FormatAlignJustify.vue'
import AlignRight from 'vue-material-design-icons/FormatAlignRight.vue'
import Restart from 'vue-material-design-icons/Restart.vue'
import DotsVertical from 'vue-material-design-icons/DotsVertical.vue'
import Inbox from 'vue-material-design-icons/InboxOutline.vue'
import Message from 'vue-material-design-icons/MessageOutline.vue'

const setupIcon = (app: any) => {
  app.component('icon-menu', Menu)
  app.component('icon-trash-can', TrashCan)
  app.component('icon-edit', FileEdit)
  app.component('icon-save', Save)
  app.component('icon-text', Text)
  app.component('icon-download', Download)
  app.component('icon-upload', Upload)
  app.component('icon-close', Close)
  app.component('icon-link', Link)
  app.component('icon-plus', Plus)
  app.component('icon-file-account', FileAccount)
  app.component('icon-tune', Tune)
  app.component('icon-cog', Cog)
  app.component('icon-bubbles', Bubbles)
  app.component('icon-stop', Stop)
  app.component('icon-history', History)
  app.component('icon-send', Send)
  app.component('icon-format-justify', AlignJustify)
  app.component('icon-format-right', AlignRight)
  app.component('icon-restart', Restart)
  app.component('icon-dots-vertical', DotsVertical)
  app.component('icon-inbox', Inbox)
  app.component('icon-message', Message)
}

export default setupIcon
