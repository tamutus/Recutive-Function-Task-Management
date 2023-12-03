import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillUpdateWithoutStudentsInputSchema } from './SkillUpdateWithoutStudentsInputSchema';
import { SkillUncheckedUpdateWithoutStudentsInputSchema } from './SkillUncheckedUpdateWithoutStudentsInputSchema';
import { SkillCreateWithoutStudentsInputSchema } from './SkillCreateWithoutStudentsInputSchema';
import { SkillUncheckedCreateWithoutStudentsInputSchema } from './SkillUncheckedCreateWithoutStudentsInputSchema';
import { SkillWhereInputSchema } from './SkillWhereInputSchema';

export const SkillUpsertWithoutStudentsInputSchema: z.ZodType<Prisma.SkillUpsertWithoutStudentsInput> = z.object({
  update: z.union([ z.lazy(() => SkillUpdateWithoutStudentsInputSchema),z.lazy(() => SkillUncheckedUpdateWithoutStudentsInputSchema) ]),
  create: z.union([ z.lazy(() => SkillCreateWithoutStudentsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutStudentsInputSchema) ]),
  where: z.lazy(() => SkillWhereInputSchema).optional()
}).strict();

export default SkillUpsertWithoutStudentsInputSchema;
