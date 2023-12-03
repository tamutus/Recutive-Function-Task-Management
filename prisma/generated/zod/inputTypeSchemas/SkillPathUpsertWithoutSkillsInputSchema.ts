import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathUpdateWithoutSkillsInputSchema } from './SkillPathUpdateWithoutSkillsInputSchema';
import { SkillPathUncheckedUpdateWithoutSkillsInputSchema } from './SkillPathUncheckedUpdateWithoutSkillsInputSchema';
import { SkillPathCreateWithoutSkillsInputSchema } from './SkillPathCreateWithoutSkillsInputSchema';
import { SkillPathUncheckedCreateWithoutSkillsInputSchema } from './SkillPathUncheckedCreateWithoutSkillsInputSchema';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';

export const SkillPathUpsertWithoutSkillsInputSchema: z.ZodType<Prisma.SkillPathUpsertWithoutSkillsInput> = z.object({
  update: z.union([ z.lazy(() => SkillPathUpdateWithoutSkillsInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutSkillsInputSchema) ]),
  create: z.union([ z.lazy(() => SkillPathCreateWithoutSkillsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutSkillsInputSchema) ]),
  where: z.lazy(() => SkillPathWhereInputSchema).optional()
}).strict();

export default SkillPathUpsertWithoutSkillsInputSchema;
