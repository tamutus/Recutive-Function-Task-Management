import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SkillCreateWithoutStudentsInputSchema } from './SkillCreateWithoutStudentsInputSchema';
import { SkillUncheckedCreateWithoutStudentsInputSchema } from './SkillUncheckedCreateWithoutStudentsInputSchema';
import { SkillCreateOrConnectWithoutStudentsInputSchema } from './SkillCreateOrConnectWithoutStudentsInputSchema';
import { SkillWhereUniqueInputSchema } from './SkillWhereUniqueInputSchema';

export const SkillCreateNestedOneWithoutStudentsInputSchema: z.ZodType<Prisma.SkillCreateNestedOneWithoutStudentsInput> = z.object({
  create: z.union([ z.lazy(() => SkillCreateWithoutStudentsInputSchema),z.lazy(() => SkillUncheckedCreateWithoutStudentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => SkillCreateOrConnectWithoutStudentsInputSchema).optional(),
  connect: z.lazy(() => SkillWhereUniqueInputSchema).optional()
}).strict();

export default SkillCreateNestedOneWithoutStudentsInputSchema;
