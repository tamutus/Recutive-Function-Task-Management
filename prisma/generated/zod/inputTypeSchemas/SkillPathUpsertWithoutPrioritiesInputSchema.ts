import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathUpdateWithoutPrioritiesInputSchema } from './SkillPathUpdateWithoutPrioritiesInputSchema';
import { SkillPathUncheckedUpdateWithoutPrioritiesInputSchema } from './SkillPathUncheckedUpdateWithoutPrioritiesInputSchema';
import { SkillPathCreateWithoutPrioritiesInputSchema } from './SkillPathCreateWithoutPrioritiesInputSchema';
import { SkillPathUncheckedCreateWithoutPrioritiesInputSchema } from './SkillPathUncheckedCreateWithoutPrioritiesInputSchema';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';

export const SkillPathUpsertWithoutPrioritiesInputSchema: z.ZodType<Prisma.SkillPathUpsertWithoutPrioritiesInput> = z.object({
  update: z.union([ z.lazy(() => SkillPathUpdateWithoutPrioritiesInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutPrioritiesInputSchema) ]),
  create: z.union([ z.lazy(() => SkillPathCreateWithoutPrioritiesInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutPrioritiesInputSchema) ]),
  where: z.lazy(() => SkillPathWhereInputSchema).optional()
}).strict();

export default SkillPathUpsertWithoutPrioritiesInputSchema;
