import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsCreateWithoutSkillInputSchema } from './PersonsToSkillsCreateWithoutSkillInputSchema';
import { PersonsToSkillsUncheckedCreateWithoutSkillInputSchema } from './PersonsToSkillsUncheckedCreateWithoutSkillInputSchema';
import { PersonsToSkillsCreateOrConnectWithoutSkillInputSchema } from './PersonsToSkillsCreateOrConnectWithoutSkillInputSchema';
import { PersonsToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema } from './PersonsToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema';
import { PersonsToSkillsCreateManySkillInputEnvelopeSchema } from './PersonsToSkillsCreateManySkillInputEnvelopeSchema';
import { PersonsToSkillsWhereUniqueInputSchema } from './PersonsToSkillsWhereUniqueInputSchema';
import { PersonsToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema } from './PersonsToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema';
import { PersonsToSkillsUpdateManyWithWhereWithoutSkillInputSchema } from './PersonsToSkillsUpdateManyWithWhereWithoutSkillInputSchema';
import { PersonsToSkillsScalarWhereInputSchema } from './PersonsToSkillsScalarWhereInputSchema';

export const PersonsToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema: z.ZodType<Prisma.PersonsToSkillsUncheckedUpdateManyWithoutSkillNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToSkillsCreateWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsCreateWithoutSkillInputSchema).array(),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutSkillInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToSkillsCreateOrConnectWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsCreateOrConnectWithoutSkillInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsUpsertWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToSkillsCreateManySkillInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsUpdateWithWhereUniqueWithoutSkillInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToSkillsUpdateManyWithWhereWithoutSkillInputSchema),z.lazy(() => PersonsToSkillsUpdateManyWithWhereWithoutSkillInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToSkillsScalarWhereInputSchema),z.lazy(() => PersonsToSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToSkillsUncheckedUpdateManyWithoutSkillNestedInputSchema;
