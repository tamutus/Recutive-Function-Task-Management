import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';
import { SkillPathUpdateWithoutTagsInputSchema } from './SkillPathUpdateWithoutTagsInputSchema';
import { SkillPathUncheckedUpdateWithoutTagsInputSchema } from './SkillPathUncheckedUpdateWithoutTagsInputSchema';

export const SkillPathUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.SkillPathUpdateToOneWithWhereWithoutTagsInput> = z.object({
  where: z.lazy(() => SkillPathWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillPathUpdateWithoutTagsInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutTagsInputSchema) ]),
}).strict();

export default SkillPathUpdateToOneWithWhereWithoutTagsInputSchema;
