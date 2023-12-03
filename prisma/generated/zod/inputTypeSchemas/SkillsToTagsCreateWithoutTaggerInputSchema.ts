import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutTagsInputSchema } from './SkillCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutSkillsInputSchema } from './TagCreateNestedOneWithoutSkillsInputSchema';

export const SkillsToTagsCreateWithoutTaggerInputSchema: z.ZodType<Prisma.SkillsToTagsCreateWithoutTaggerInput> = z.object({
  skill: z.lazy(() => SkillCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutSkillsInputSchema)
}).strict();

export default SkillsToTagsCreateWithoutTaggerInputSchema;
