import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateNestedOneWithoutTagsInputSchema } from './SkillCreateNestedOneWithoutTagsInputSchema';
import { TagCreateNestedOneWithoutSkillsInputSchema } from './TagCreateNestedOneWithoutSkillsInputSchema';
import { PersonCreateNestedOneWithoutSkillTagsInputSchema } from './PersonCreateNestedOneWithoutSkillTagsInputSchema';

export const SkillsToTagsCreateInputSchema: z.ZodType<Prisma.SkillsToTagsCreateInput> = z.object({
  skill: z.lazy(() => SkillCreateNestedOneWithoutTagsInputSchema),
  tag: z.lazy(() => TagCreateNestedOneWithoutSkillsInputSchema),
  tagger: z.lazy(() => PersonCreateNestedOneWithoutSkillTagsInputSchema)
}).strict();

export default SkillsToTagsCreateInputSchema;
