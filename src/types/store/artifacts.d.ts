interface ArtifactsStoreState {
  artifacts: Artifact[];
}

type ArtifactsPlatform =
  | 'Surge'
  | 'QX'
  | 'Loon'
  | 'Clash'
  | 'Stash'
  | 'ShadowRocket'
  | 'ClashMeta'
  | 'sing-box'
  | 'V2Ray';

type ArtifactType = 'collection' | 'subscription' | 'file';

interface Artifact {
  name: string;
  displayName?: string;
  icon?: string;
  type: ArtifactType;
  source: string;
  platform: ArtifactsPlatform;
  sync?: boolean;
  includeUnsupportedProxy?: boolean;
  updated?: number;
  url?: string;
}

interface ArtifactForm {
  name: string;
  displayName?: string;
  type: ArtifactType;
  source: [string, string];
  platform: ArtifactsPlatform;
  sync?: boolean;
  updated?: number;
  url?: string;
}
