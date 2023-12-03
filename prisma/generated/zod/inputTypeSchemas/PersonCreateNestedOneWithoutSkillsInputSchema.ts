import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonCreateWithoutSkillsInputSchema } from './PersonCreateWithoutSkillsInputSchema';
import { PersonUncheckedCreateWithoutSkillsInputSchema } from './PersonUncheckedCreateWithoutSkillsInputSchema';
import { PersonCreateOrConnectWithoutSkillsInputSchema } from './PersonCreateOrConnectWithoutSkillsInputSchema';
import { PersonWhereUniqueInputSchema } from './PersonWhereUniqueInputSchema';

export const PersonCreateNestedOneWithoutSkillsInputSchema: z.ZodType<Prisma.PersonCreateNestedOneWithoutSkillsInput> = z.object({
  create: z.union([ z.lazy(() => PersonCreateWithoutSkillsInputSchema),z.lazy(() => PersonUncheckedCreateWithoutSkillsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PersonCreateOrConnectWithoutSkillsInputSchema).optional(),
  connect: z.lazy(() => PersonWhereUniqueInputSchema).optional()
}).strict();

export default PersonCreateNestedOneWithoutSkillsInputSchema;
