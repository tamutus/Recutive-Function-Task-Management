import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutPathsInputSchema } from './TagCreateNestedOneWithoutPathsInputSchema';
import { PersonCreateNestedOneWithoutSkillPathTagsInputSchema } from './PersonCreateNestedOneWithoutSkillPathTagsInputSchema';

export const SkillPathsToTagsCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateWithoutSkillInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutPathsInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutSkillPathTagsInputSchema)
}).strict();

export default SkillPathsToTagsCreateWithoutSkillInputSchema;
