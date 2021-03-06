import React from 'react';
import { storiesOf } from '@storybook/react';
import MediaObjectLayout from './index';
import Button from '../Button';
import Heading from '../Heading';
import Txt from '../Txt';
const dammy = require('../../../mock/images/img01.png');

storiesOf(`Atoms/MediaObjectLayout`, module)
  .add(`default`, () => (
    <MediaObjectLayout>
      <div>
        <img src={dammy} width={300} height={300} />
      </div>
      <p>
        説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
      </p>
      <p>
        説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
      </p>
    </MediaObjectLayout>
  ))
  .add(`sectionタグ指定`, () => (
    <MediaObjectLayout tag={'section'}>
      <div>
        <img src={dammy} width={300} height={300} />
      </div>
      <p>
        説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
      </p>
    </MediaObjectLayout>
  ))
  .add(`タイトル、説明、ボタン`, () => (
    <MediaObjectLayout>
      <div>
        <img src={dammy} width={300} height={300} />
      </div>
      <div>
        <Heading>タイトル</Heading>
        <Txt>
          説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト説明テキスト
        </Txt>
        <Button>ボタン</Button>
      </div>
    </MediaObjectLayout>
  ));
