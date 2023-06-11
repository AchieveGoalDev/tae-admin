export type TabDef = {
    text: string,
    link: string,
    icon: string
}

export type TabIndex = {
    event: TabDef[],
}

const eventManageGakunai: TabDef = {
    text: "学内イベント管理",
    link: "/gakunaievent",
    icon: "material-symbols:folder-managed"
}

const eventManageGakugai = {
    text: "学外イベント管理",
    link: "/gakugaievent",
    icon: "material-symbols:folder-managed-outline"
}

const eventApplicantGakunai = {
    text: "学内申込管理",
    link: "/gakunaiapplication",
    icon: "ph:stamp-fill"
}

const eventApplicantGakugai = {
    text: "学外申込管理",
    link: "/gakugaiapplication",
    icon: "ph:stamp-fill",
}

export const tabIndex: TabIndex = {
    event: [eventManageGakunai, eventManageGakugai, eventApplicantGakunai, eventApplicantGakugai]
}