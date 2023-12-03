import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutTagsInputSchema } from './SkillCreateNestedOneWithoutTagsInputSchema';
import { PersonCreateNestedOneWithoutSkillTagsInputSchema } from './PersonCreateNestedOneWithoutSkillTagsInputSchema';

export const SkillsToTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.SkillsToTagsCreateWithoutTagInput> = z.object({
  skill: z.lazy(() => SkillCreateNestedOneWithoutTagsInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutSkillTagsInputSchema)
}).strict();

export default SkillsToTagsCreateWithoutTagInputSchema;
