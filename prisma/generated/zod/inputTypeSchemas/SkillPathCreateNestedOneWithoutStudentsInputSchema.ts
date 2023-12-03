import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillPathCreateWithoutStudentsInputSchema } from './SkillPathCreateWithoutStudentsInputSchema';
import { SkillPathUncheckedCreateWithoutStudentsInputSchema } from './SkillPathUncheckedCreateWithoutStudentsInputSchema';
import { SkillPathCreateOrConnectWithoutStudentsInputSchema } from './SkillPathCreateOrConnectWithoutStudentsInputSchema';
import { SkillPathWhereUniqueInputSchema } from './SkillPathWhereUniqueInputSchema';

export const SkillPathCreateNestedOneWithoutStudentsInputSchema: z.ZodType<Prisma.SkillPathCreateNestedOneWithoutStudentsInput> = z.object({
  create: z.union([ z.lazy(() => SkillPathCreateWithoutStudentsInputSchema),z.lazy(() => SkillPathUncheckedCreateWithoutStudentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillPathCreateOrConnectWithoutStudentsInputSchema).optional(),
  connect: z.lazy(() => SkillPathWhereUniqueInputSchema).optional()
}).strict();

export default SkillPathCreateNestedOneWithoutStudentsInputSchema;
