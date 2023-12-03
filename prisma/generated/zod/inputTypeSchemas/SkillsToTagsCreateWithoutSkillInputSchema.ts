import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TagCreateNestedOneWithoutSkillsInputSchema } from './TagCreateNestedOneWithoutSkillsInputSchema';
import { PersonCreateNestedOneWithoutSkillTagsInputSchema } from './PersonCreateNestedOneWithoutSkillTagsInputSchema';

export const SkillsToTagsCreateWithoutSkillInputSchema: z.ZodType<Prisma.SkillsToTagsCreateWithoutSkillInput> = z.object({
  tag: z.lazy(() => TagCreateNestedOneWithoutSkillsInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutSkillTagsInputSchema)
}).strict();

export default SkillsToTagsCreateWithoutSkillInputSchema;
