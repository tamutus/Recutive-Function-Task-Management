import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PersonsToSkillsCreateWithoutPersonInputSchema } from './PersonsToSkillsCreateWithoutPersonInputSchema';
import { PersonsToSkillsUncheckedCreateWithoutPersonInputSchema } from './PersonsToSkillsUncheckedCreateWithoutPersonInputSchema';
import { PersonsToSkillsCreateOrConnectWithoutPersonInputSchema } from './PersonsToSkillsCreateOrConnectWithoutPersonInputSchema';
import { PersonsToSkillsUpsertWithWhereUniqueWithoutPersonInputSchema } from './PersonsToSkillsUpsertWithWhereUniqueWithoutPersonInputSchema';
import { PersonsToSkillsCreateManyPersonInputEnvelopeSchema } from './PersonsToSkillsCreateManyPersonInputEnvelopeSchema';
import { PersonsToSkillsWhereUniqueInputSchema } from './PersonsToSkillsWhereUniqueInputSchema';
import { PersonsToSkillsUpdateWithWhereUniqueWithoutPersonInputSchema } from './PersonsToSkillsUpdateWithWhereUniqueWithoutPersonInputSchema';
import { PersonsToSkillsUpdateManyWithWhereWithoutPersonInputSchema } from './PersonsToSkillsUpdateManyWithWhereWithoutPersonInputSchema';
import { PersonsToSkillsScalarWhereInputSchema } from './PersonsToSkillsScalarWhereInputSchema';

export const PersonsToSkillsUncheckedUpdateManyWithoutPersonNestedInputSchema: z.ZodType<Prisma.PersonsToSkillsUncheckedUpdateManyWithoutPersonNestedInput> = z.object({
  create: z.union([ z.lazy(() => PersonsToSkillsCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsCreateWithoutPersonInputSchema).array(),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsUncheckedCreateWithoutPersonInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PersonsToSkillsCreateOrConnectWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsCreateOrConnectWithoutPersonInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PersonsToSkillsUpsertWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsUpsertWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PersonsToSkillsCreateManyPersonInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PersonsToSkillsWhereUniqueInputSchema),z.lazy(() => PersonsToSkillsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PersonsToSkillsUpdateWithWhereUniqueWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsUpdateWithWhereUniqueWithoutPersonInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PersonsToSkillsUpdateManyWithWhereWithoutPersonInputSchema),z.lazy(() => PersonsToSkillsUpdateManyWithWhereWithoutPersonInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PersonsToSkillsScalarWhereInputSchema),z.lazy(() => PersonsToSkillsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PersonsToSkillsUncheckedUpdateManyWithoutPersonNestedInputSchema;
