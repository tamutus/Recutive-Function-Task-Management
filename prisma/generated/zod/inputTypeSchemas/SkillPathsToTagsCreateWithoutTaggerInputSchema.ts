import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateNestedOneWithoutTagsInputSchema } from './SkillPathCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutPathsInputSchema } from './TagCreateNestedOneWithoutPathsInputSchema';

export const SkillPathsToTagsCreateWithoutTaggerInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateWithoutTaggerInput> = z.object({
  skill: z.lazy(() => SkillPathCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutPathsInputSchema)
}).strict();

export default SkillPathsToTagsCreateWithoutTaggerInputSchema;
