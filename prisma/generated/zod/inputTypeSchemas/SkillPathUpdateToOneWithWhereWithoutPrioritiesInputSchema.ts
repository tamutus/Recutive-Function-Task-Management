import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';
import { SkillPathUpdateWithoutPrioritiesInputSchema } from './SkillPathUpdateWithoutPrioritiesInputSchema';
import { SkillPathUncheckedUpdateWithoutPrioritiesInputSchema } from './SkillPathUncheckedUpdateWithoutPrioritiesInputSchema';

export const SkillPathUpdateToOneWithWhereWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillPathUpdateToOneWithWhereWithoutPrioritiesInput> = z.object({
  where: z.lazy(() => SkillPathWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => SkillPathUpdateWithoutPrioritiesInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutPrioritiesInputSchema) ]),
}).strict();

export default SkillPathUpdateToOneWithWhereWithoutPrioritiesInputSchema;
