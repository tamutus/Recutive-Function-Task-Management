import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateNestedOneWithoutTagsInputSchema } from './SkillPathCreateNestedOneWithoutTagsInputSchema';
import { PersonCreateNestedOneWithoutSkillPathTagsInputSchema } from './PersonCreateNestedOneWithoutSkillPathTagsInputSchema';

export const SkillPathsToTagsCreateWithoutTagInputSchema: z.ZodType<Prisma.SkillPathsToTagsCreateWithoutTagInput> = z.object({
  skill: z.lazy(() => SkillPathCreateNestedOneWithoutTagsInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutSkillPathTagsInputSchema)
}).strict();

export default SkillPathsToTagsCreateWithoutTagInputSchema;
