import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateNestedOneWithoutTagsInputSchema } from './SkillPathCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutPathsInputSchema } from './TagCreateNestedOneWithoutPathsInputSchema';
import { PersonCreateNestedOneWithoutSkillPathTagsInputSchema } from './PersonCreateNestedOneWithoutSkillPathTagsInputSchema';

export const SkillPathsToTagsCreateInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateInput> = z.object({
  skill: z.lazy(() => SkillPathCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutPathsInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutSkillPathTagsInputSchema)
}).strict();

export default SkillPathsToTagsCreateInputSchema;
