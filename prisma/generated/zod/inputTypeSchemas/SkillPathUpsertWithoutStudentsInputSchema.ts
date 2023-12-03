import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathUpdateWithoutStudentsInputSchema } from './SkillPathUpdateWithoutStudentsInputSchema';
import { SkillPathUncheckedUpdateWithoutStudentsInputSchema } from './SkillPathUncheckedUpdateWithoutStudentsInputSchema';
import { SkillPathCreateWithoutStudentsInputSchema } from './SkillPathCreateWithoutStudentsInputSchema';
import { SkillPathUncheckedCreateWithoutStudentsInputSchema } from './SkillPathUncheckedCreateWithoutStudentsInputSchema';
import { SkillPathWhereInputSchema } from './SkillPathWhereInputSchema';

export const SkillPathUpsertWithoutStudentsInputSchema: z.ZodType<Prisma.SkillPathUpsertWithoutStudentsInput> = z.object({
  update: z.union([ z.lazy(() => SkillPathUpdateWithoutStudentsInputSchema),z.lazy(() => SkillPathUncheckedUpdateWithoutStudentsInputSchema) ]),
  create: z.union([ z.lazy(() => SkillPathCreateWithoutStudentsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutStudentsInputSchema) ]),
  where: z.lazy(() => SkillPathWhereInputSchema).optional()
}).strict();

export default SkillPathUpsertWithoutStudentsInputSchema;
